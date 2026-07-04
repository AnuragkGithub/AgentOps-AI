from app.agents.intent_agent import IntentAgent
from app.agents.knowledge_agent import KnowledgeAgent
from app.agents.ticket_agent import TicketAgent


class SupportWorkflow:

    def __init__(self):

        self.intent = IntentAgent()
        self.knowledge = KnowledgeAgent()
        self.ticket = TicketAgent()

    def execute(self, query):

        category = self.intent.classify(query)

        answer = self.knowledge.search(category)

        ticket = self.ticket.create_ticket(category)

        return {
            "category": category,
            "answer": answer,
            **ticket
        }