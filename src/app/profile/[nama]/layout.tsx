import React from 'react';
import { getMetadataTitle } from "@/utils/metadata/title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: getMetadataTitle('Project'),
}

export default async function DashboardPageLayout({ children }: { children: React.ReactNode })
{
  return children;
}


