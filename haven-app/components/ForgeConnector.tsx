"use client";
import { useEffect } from "react";
import { connectForge } from "@/lib/forge";

/** Mounted once in the root layout. The dashboard and Ellora both read the same store. */
export function ForgeConnector() {
  useEffect(() => connectForge(), []);
  return null;
}
