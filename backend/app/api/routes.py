from fastapi import APIRouter

from app.models.schemas import SupportRequest
from app.workflows.support_workflow import SupportWorkflow

router = APIRouter()

workflow = SupportWorkflow()


@router.post("/support")
def support(request: SupportRequest):

    return workflow.execute(
        request.query
    )