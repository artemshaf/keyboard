export type JwtPayload = {
  userId: number;
  email: string;
};

export type JwtPayloadWithRefrToken = JwtPayload & { refreshToken: string };
