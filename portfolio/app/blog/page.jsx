export const dynamic = "force-dynamic";

import BlogPage from "../modules/userDefined/blogs/fullBlog";

export const metadata = {
    title: "Blog",
    description:
        "Technical articles by Nakul Dev M V on software engineering, full-stack development, automation, and creative web experiences.",
    alternates: {
        canonical: "https://www.nakuldev.me/blog",
    },
    openGraph: {
        type: "website",
        url: "https://www.nakuldev.me/blog",
        title: "Blog | Nakul Dev M V",
        description:
            "Technical articles by Nakul Dev M V on software engineering, full-stack development, automation, and creative web experiences.",
        images: ["/og-image.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Nakul Dev M V",
        description:
            "Technical articles by Nakul Dev M V on software engineering, full-stack development, automation, and creative web experiences.",
        images: ["/og-image.png"],
    },
};

export default function Blog(){
    return(
    <BlogPage/>
    )
}
