import { notFound } from "next/navigation";
import { getCompanyBySlug } from "@/data/companies";
import CompanyPageClient from "./CompanyPageClient";

interface CompanyPageProps {
  params: Promise<{ company: string }>;
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { company } = await params;
  const companyData = getCompanyBySlug(company);

  if (!companyData) {
    notFound();
  }

  return <CompanyPageClient companyData={companyData} />;
}
