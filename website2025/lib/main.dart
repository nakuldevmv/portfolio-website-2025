import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:website2025/launch_url.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Nakul's Portfolio - Loading",
      home: Scaffold(
        body: Center(
          child: Container(
            color: const Color(0xFFF4F4F4),
            height: double.infinity,
            width: double.infinity,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                const Text(
                  "Nakul's 2025 Portfolio Website is Loading...",
                  style: TextStyle(
                    fontSize: 40, // Equivalent to 2.5em
                    color: Color(0xFF333333),
                  ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 20), // Equivalent to margin-bottom: 20px
                const Text(
                  "In the meantime, you can visit the old website:",
                  style: TextStyle(
                    fontSize: 24, // Equivalent to 1.2em
                    color: Color(0xFF333333),
                  ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 10), // Equivalent to margin-bottom: 10px
                GestureDetector(
                  onTap: () {
                    urlLaunch("https://nakuldevmv.github.io/");
                  },
                  child: const Text(
                    "Visit Old Portfolio",
                    style: TextStyle(
                      color: Color(0xFF007BFF),
                      fontWeight: FontWeight.bold,
                      decoration: TextDecoration.none,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
