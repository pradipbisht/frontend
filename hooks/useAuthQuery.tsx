"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "@/lib/api/auth";

export function useMe() {
  return useQuery<{ user: api.User } | null>({
    queryKey: ["me"],
    queryFn: api.getMe,
    // keep the data for a short time to avoid refetches on re-mounts
    staleTime: 1000 * 60 * 2, // 2 minutes
    retry: false,
    refetchOnWindowFocus: false,
  });
}

export function useLogin() {
  const qc = useQueryClient();
  return useMutation<
    { user: api.User },
    Error,
    { email: string; password: string }
  >({
    mutationFn: ({ email, password }) => api.login(email, password),
    onSuccess: (data) => {
      qc.setQueryData(["me"], data);
    },
  });
}

export function useRegister() {
  const qc = useQueryClient();
  return useMutation<
    { user: api.User },
    Error,
    { name: string; email: string; password: string; interests?: string[] }
  >({
    mutationFn: ({ name, email, password, interests }) =>
      api.register(name, email, password, interests),
    onSuccess: (data) => {
      qc.setQueryData(["me"], data);
    },
  });
}

export function useLogout() {
  const qc = useQueryClient();
  return useMutation<void, Error, void>({
    mutationFn: () => api.logout(),
    onSuccess: () => {
      qc.setQueryData(["me"], null);
    },
  });
}

export function useUpdateProfile() {
  const qc = useQueryClient();
  return useMutation<{ user: api.User }, Error, Partial<any>>({
    mutationFn: (updates) => api.updateProfile(updates),
    onSuccess: (data) => {
      qc.setQueryData(["me"], data);
    },
  });
}

export default {
  useMe,
  useLogin,
  useRegister,
  useLogout,
  useUpdateProfile,
};
