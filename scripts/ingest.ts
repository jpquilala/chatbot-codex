import { ingestKnowledgeBase } from "../lib/knowledge-base";

async function main() {
  const index = await ingestKnowledgeBase();
  console.log(
    JSON.stringify(
      {
        documents: index.documents.length,
        chunks: index.chunks.length,
        generatedAt: index.generatedAt
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
