from rest_framework.views import APIView
from rest_framework.response import Response

class TestCall(APIView):
    def get(self, request):
        try:
            return Response({"status": "success"})
        except Exception as e:
            return Response({"status": "error", "message": str(e)}, status=500)