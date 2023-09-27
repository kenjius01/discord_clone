import { Member, Profile, Server } from '@prisma/client';
import { Server as NetServer, Socket } from 'net';
import { NextApiResponse } from 'next';
import { Server as SocketIOServer } from 'socket.io';

export interface IMemberWithProfile extends Member {
  profile: Profile;
}
export interface ServerWithMembersWithProfiles extends Server {
  members: Array<IMemberWithProfile>;
}

export interface INetServer extends NetServer {
  io: SocketIOServer;
}

export interface NextApiResponseServerIo extends NextApiResponse {
  socket: Socket & {
    server: INetServer;
  };
}
