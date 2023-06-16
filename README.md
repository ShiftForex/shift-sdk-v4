# Shift V4 sdk 😎

## Usage Example

Quick example of how to use the Shift V4 SDK

```typescript
import {CreateOrderArgs, OrderSide, OrderTimeInForce, OrderType, ShiftV4Sdk} from 'shift-sdk-v4';

const client = new ShiftV4Sdk('endpoint');

client.setGlobalAuthToken('jwt');
client.setGlobalCustomHeader('custom-header', 'custom-value');

const instruments = await client.instruments({fields: ['instrument_id', 'name']});

const user = await client.user({fields: ['user_id', {trading_volumes: ['instrument_id']}]});

const args: CreateOrderArgs = {
    instrument_id: 'BTCUSD',
    quantity: 1,
    type: OrderType.limit,
    side: OrderSide.buy,
    time_in_force: OrderTimeInForce.gtc,
};

await client.create_order({
    args,
    fields: ['order_id'],
});
```

In this example, the shift SDK allows you to perform GraphQL queries and mutations. You can customize request headers, set global authentication tokens, and access ready to use methods for specific queries and mutations.

## Types, interfaces and enums


```typescript
export type QueryType = 'open_orders' | 'closed_orders' | 'estimate_order' | 'trades' ...

export type MutationType = 'create_order' | 'cancel_multiple_orders' | 'cancel_order' | 'cancel_all_orders' ...

const client = new ShiftV4Sdk('http://localhost:3001/graphql');

export enum PaymentType {
    withdrawal = 'withdrawal',
    deposit = 'deposit',
}

export enum CryptoAddressTagType {
    destination_tag = 'destination_tag',
    memo_id = 'memo_id',
    note = 'note',
    tag = 'tag',
}

export interface TradingFee {
    instrument_id: string;
    fee_group_id: string;
    maker_progressive: number;
    taker_progressive: number;
    maker_flat: number;
    taker_flat: number;
    fee_group: FeeGroup;
}

export const SdkClientInstance = new SdkClient('endpoint')
```

## Enjoy 🚀🚀🚀

