import { Poppins, Inter } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Rebel SME Summit 2024",
	description:
		"Join the world's leading innovators for three days of groundbreaking insights and technological advancement.",
    icons: {
      icon: '/images/logo/logo.png'
    },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			style={{ scrollBehavior: "smooth" }}
			className={`${poppins.variable} ${inter.variable}`}
		>
			<body style={{ scrollBehavior: "smooth" }}>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
