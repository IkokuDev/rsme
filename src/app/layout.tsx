import { Poppins, Inter } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import { Framework } from "./framework";

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
	title: "Rebel SME Summit 2025",
	description:
		"Join the world's leading innovators for three days of groundbreaking insights and technological advancement.",
    icons: {
      icon: '/images/logo-v2.png'
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
				<Provider>
					<Framework>
						{children}
					</Framework>
				</Provider>
			</body>
		</html>
	);
}
