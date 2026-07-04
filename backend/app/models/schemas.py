from pydantic import BaseModel


class SupportRequest(BaseModel):
    query: str


class TicketResponse(BaseModel):
    category: str
    answer: str
    priority: str
    ticket_required: bool