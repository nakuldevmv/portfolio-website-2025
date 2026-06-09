export const dynamic = "force-dynamic";

import BlogPage from "../modules/userDefined/blogs/fullBlog";

export const metadata = {
    title: "Blog",
    description:
        "Articles by Nakul Dev M V on full-stack development, automation, React, Next.js, and practical software engineering.",
    alternates: {
        canonical: "https://www.nakuldev.me/blog",
    },
    openGraph: {
        type: "website",
        url: "https://www.nakuldev.me/blog",
        title: "Blog | Nakul Dev M V",
        description:
            "Articles by Nakul Dev M V on full-stack development, automation, React, Next.js, and practical software engineering.",
        images: ["/og-image.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Nakul Dev M V",
        description:
            "Articles by Nakul Dev M V on full-stack development, automation, React, Next.js, and practical software engineering.",
        images: ["/og-image.png"],
    },
};

export default function Blog(){
    return(
    <BlogPage/>
    )
}
