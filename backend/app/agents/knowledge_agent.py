import json
from pathlib import Path


class KnowledgeAgent:

    def __init__(self):

        BASE_DIR = Path(__file__).resolve().parents[2]
        file_path = (
            BASE_DIR
            / "knowledge_base"
            / "faq.json"
            )

        with open(file_path) as f:
            self.data = json.load(f)

    def search(self, category):

        return self.data.get(
            category,
            "No information found."
        )