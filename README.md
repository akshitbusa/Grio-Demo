# Demo Delight - GRIO AI Learning Companion

This repository contains the front-end implementation of the GRIO AI Learning Companion demo.

**Framework**: Next.js 14
**Styling**: Pure CSS Modules
**Typography & Icons**: Uses Google Fonts (`Outfit`) through Next.js font optimization, and `lucide-react` for scalable SVG iconography.



Currently, the GRIO AI interaction is designed as an interactive front-end demo rather than a live LLM integration:

1.  **Predefined State**: The dashboard surfaces 3 predefined, context-specific questions relevant to tourism and hospitality.
2.  **User Selection**: When a question chip is tapped, it updates the `selectedQuestion` state.
3.  **Simulated Response**: This state change triggers the rendering of a simulated two-way chat:
    *   A user message bubble appears containing the chosen question.
    *   A simulated AI response bubble is conditionally rendered, containing tailored, formatted content (e.g., definitions, acronym breakdowns, and interactive "Quick check" quizzes).
4.  **Animations**: CSS animations (`animate-fade-in` with an `animationDelay`) are heavily utilized to simulate the natural feeling of real-time AI generation. 
5.  **Input Placeholder**: While an input bar exists for aesthetic and UX completeness, free-form text entry is currently unlinked to a backend AI generation service.

