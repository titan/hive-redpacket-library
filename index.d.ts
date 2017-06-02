export declare enum RedPacketState {
    CREATE = 1,
    CHECKOUT = 2,
}
export interface RedPacket {
    id: string;
    balance: number;
    rolled: number;
    state: RedPacketState;
    created_at: Date;
    updated_at: Date;
}
