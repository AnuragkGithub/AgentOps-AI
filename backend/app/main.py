from fastapi import FastAPI

from app.api.routes import router

app = FastAPI(
    title="AgentOps AI"
)

app.include_router(router)