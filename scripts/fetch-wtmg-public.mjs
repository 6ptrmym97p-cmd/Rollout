import fs from "node:fs";
import path from "node:path";

const outputPath = process.argv[2] || "/tmp/wtmg-public.json";
const endpoint = "https://firestore.googleapis.com/v1/projects/wtmg-production/databases/(default)/documents:runQuery";
const gardens = [];
let cursor = null;
let page = 0;

function scalar(field) {
  if (!field) return null;
  if (Object.hasOwn(field, "booleanValue")) return field.booleanValue;
  if (Object.hasOwn(field, "integerValue")) return Number(field.integerValue);
  if (Object.hasOwn(field, "doubleValue")) return Number(field.doubleValue);
  if (Object.hasOwn(field, "stringValue")) return field.stringValue;
  return null;
}

do {
  page += 1;
  const structuredQuery = {
    from: [{ collectionId: "campsites", allDescendants: false }],
    where: {
      fieldFilter: {
        field: { fieldPath: "listed" },
        op: "EQUAL",
        value: { booleanValue: true },
      },
    },
    limit: 1500,
    orderBy: [{ direction: "ASCENDING", field: { fieldPath: "__name__" } }],
    ...(cursor ? {
      startAt: {
        before: false,
        values: [{ referenceValue: cursor }],
      },
    } : {}),
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ structuredQuery }),
  });
  if (!response.ok) throw new Error(`WTMG gaf HTTP ${response.status}`);

  const rows = await response.json();
  const documents = rows.filter((row) => row.document).map((row) => row.document);
  for (const document of documents) {
    const fields = document.fields || {};
    const id = document.name.split("/").at(-1);
    const location = fields.location?.mapValue?.fields || {};
    const latitude = Number(scalar(location.latitude));
    const longitude = Number(scalar(location.longitude));
    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) continue;

    const facilities = Object.fromEntries(
      Object.entries(fields.facilities?.mapValue?.fields || {})
        .map(([name, value]) => [name, scalar(value)])
        .filter(([, value]) => value !== null),
    );
    gardens.push({
      id,
      latitude,
      longitude,
      facilities,
      photo: scalar(fields.photo) || "",
    });
  }

  cursor = documents.length === 1500 ? documents.at(-1).name : null;
  console.log(`WTMG pagina ${page}: ${documents.length} documenten`);
} while (cursor);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(gardens)}\n`);
console.log(`Geschreven: ${outputPath} (${gardens.length} openbare tuinpunten)`);
