export default {
  license:
    "eyJzY29wZSI6WyJBTEwiXSwicGxhdGZvcm0iOlsiaU9TIiwiQW5kcm9pZCIsIldpbmRvd3MiXSwidmFsaWQiOiIyMDE4LTExLTE1IiwibWFqb3JWZXJzaW9uIjoiMyIsImlzQ29tbWVyY2lhbCI6ZmFsc2UsInRvbGVyYW5jZURheXMiOjMwLCJzaG93UG9wVXBBZnRlckV4cGlyeSI6dHJ1ZSwiaW9zSWRlbnRpZmllciI6WyJjb20udHR0dHR0dHR0dHR0Il0sImFuZHJvaWRJZGVudGlmaWVyIjpbImNvbS50dHR0dHR0dHR0dHQiXSwid2luZG93c0lkZW50aWZpZXIiOlsiY29tLnR0dHR0dHR0dHR0dCJdfQpSWmJNaFlkOTI3L2d4OS9HbmxJd3lEZFJ1b2NJWkl2ZnBLbFo1S0tuR01kNTAvaHFlaFgwNk82a3VGRWhUNWYyeFFLYkY4cTRDZ2N2WlA2RU5PMisreUVQUjVxUFlNN3hkNS9IOGQ1TmtUZ0VzVGwyRmFKaXhJM0U0bDJjRlBFRzZZU3ZnekhFSmF0YlI4bHR4dHJONmFmR0JLQzJMbnA5eFAvNXNRNFFybDAxM3doNWJmZWdYTXZrVU95SjN6eGw0SG9wTHNvWm10THkzQi9SUTNTaUV4dkY5cVp2MERrVUxocG1IOU8rOW8vWTJoNzgvZm9wUS8wYS9WZll0V3gzeUZsZGhoeEZhRTlrSk5vYzAza3M1MXpmOXhqRmJpZjcxOEsxUE0wNmVrMlNlNzBCT1RMcTZjU1psdXc1QkJMUXk3MmIxbHV6ZHpxVUd4TU9oMThYUHc9PQ==",
  options: {
    cutout: {
      style: "rect",
      maxWidthPercent: "70%",
      alignment: "top_half",
      ratioFromSize: {
        width: 62,
        height: 9
      },
      outerColor: "000000",
      outerAlpha: 0.3,
      strokeWidth: 1,
      strokeColor: "FFFFFF",
      cornerRadius: 2,
      feedbackStrokeColor: "0099FF"
    },
    flash: {
      mode: "manual",
      alignment: "bottom_left",
      imageOn: "ic_flash_on",
      imageOff: "ic_flash_off"
    },
    visualFeedback: {
      animation: "traverse_multi",
      animationDuration: 250,
      style: "contour_rect",
      strokeWidth: 2,
      strokeColor: "0099FF"
    },
    beepOnResult: false,
    vibrateOnResult: true,
    blinkAnimationOnResult: true,
    cancelOnResult: true,
    reportingEnabled: true
  },
  ocr: {
    scanMode: "LINE",
    minCharHeight: 25,
    maxCharHeight: 65,
    traineddataFiles: ["USNr.any"],
    minConfidence: 70
  }
};
