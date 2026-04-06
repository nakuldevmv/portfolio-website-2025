import GymPage from "./GymPage";

export const metadata = {
  title: "Final Form Gym Plan",
  description:
    "A hidden workout and cutting diet plan page with a weekly split, progression rules, and daily nutrition targets.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function Page() {
  return <GymPage />;
}
