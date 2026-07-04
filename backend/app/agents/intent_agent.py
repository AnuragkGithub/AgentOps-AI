class IntentAgent:
    
    def classify(self, query: str):

        query = query.lower()

        if "password" in query:
            return "PASSWORD_RESET"

        if "vpn" in query:
            return "VPN_ISSUE"

        if "access" in query:
            return "ACCESS_REQUEST"

        if "software" in query:
            return "SOFTWARE_INSTALL"

        return "GENERAL_SUPPORT"