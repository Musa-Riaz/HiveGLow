from django.shortcuts import render
from django.http import JsonResponse
import json


def get_response(request):
    if request.method == "GET":
        try:
            # Get message from query parameters (e.g., ?message=hello)
            message = request.GET.get("message", "")

            # Check if the message is provided
            return JsonResponse({"message": message, "success": True})

        except Exception as e:
            return JsonResponse({"message": str(e), "success": False}, status=500)
    else:
        return JsonResponse(
            {
                "message": "Invalid request method, GET method required",
                "success": False,
            },
            status=405,
        )
