class TicketAgent:
    
    def create_ticket(self, category):

        high_priority = [
            "VPN_ISSUE",
            "ACCESS_REQUEST"
        ]

        return {
            "priority":
                "HIGH"
                if category in high_priority
                else "MEDIUM",

            "ticket_required": True
        }