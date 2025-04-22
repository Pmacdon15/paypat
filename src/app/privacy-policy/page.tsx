import ContentContainer from "@/components/ui/containers/content-container";
import PageContainer from "@/components/ui/containers/page-container"
import Link from "next/link";

export default function page() {
    return (
        <PageContainer>
             <ContentContainer>
                <h1 className="text-2xl">
                    Privacy policy
                </h1>
                <Link href='/'>Go Home</Link>
            </ContentContainer>
        </PageContainer>
    );
};