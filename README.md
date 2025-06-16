Row(
  mainAxisSize: MainAxisSize.min,
  children: <Widget>[
    const SizedBox(width: 20.0, height: 100.0),
    const Text(
      'Be',
      style: TextStyle(fontSize: 43.0),
    ),
    const SizedBox(width: 20.0, height: 100.0),
    DefaultTextStyle(
      style: const TextStyle(
        fontSize: 40.0,
        fontFamily: 'Horizon',
      ),
      child: AnimatedTextKit(
        animatedTexts: [
          RotateAnimatedText('AWESOME'),
          RotateAnimatedText('OPTIMISTIC'),
          RotateAnimatedText('DIFFERENT'),
        ],
        onTap: () {
          print("Tap Event");
        },
      ),
    ),
  ],
);

# 🎬 CineSphere - Movie Streaming Platform

🚀 **[Live Now](https://aswinash05.github.io/Movie_Streaming_Platform/)**

Welcome to **CineSphere** – a futuristic, responsive movie streaming platform built with **HTML, CSS, and JavaScript**. Designed with sleek UI, genre-based navigation, and ✨scroll-triggered animations✨ using AOS library to enhance user experience.

> *"Your one-stop platform to explore and enjoy cinematic greatness."*

---

## ✨ Features

🎞️ **Interactive Homepage** – Stylish movie cards with smooth hover effects  
🎬 **Genre-Wise Pages** – Action, Drama, Comedy, Thriller, Sci-Fi, Horror  
📁 **Organized Folder Structure** – All genre pages inside `genres/` folder  
📄 **Individual Movie Pages** – Centered poster, cast/crew info, and a Play button  
📱 **Fully Responsive** – Works great on desktop, tablet, and mobile  
💫 **Pre-built Animations** – Implemented using [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) for cool effects on scroll

---

## 🎨 Animations Included

The platform uses `AOS` for pre-built CSS animations, including:
- `fade-up`, `fade-right`, `zoom-in`, `flip-left`, and more  
- Activated on scroll for a smooth and modern user feel  
- Lightweight and optimized for performance

---

## 🛠 Tech Stack

```txt
HTML5       - Markup  
CSS3        - Styling and layout  
JavaScript  - Logic and interactivity  
