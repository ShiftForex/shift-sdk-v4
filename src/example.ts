import {CreateOrderArgs, OrderSide, OrderTimeInForce, OrderType, ShiftV4Sdk} from '.';

async function main() {
    const client = new ShiftV4Sdk('https://vakotrade-demo.cryptosrvc.com/graphql');

    client.setGlobalAuthToken('jwt');
    client.setGlobalCustomHeader('custom-header', 'custom-value');

    const instruments = await client.instruments({fields: ['instrument_id', 'name']});

    const user = await client.user({fields: ['user_id', {trading_volumes: ['instrument_id']}]});

    const args: CreateOrderArgs = {
        instrument_id: 'BTCUSD',
        quantity: 1,
        type: OrderType.market,
        side: OrderSide.buy,
        time_in_force: OrderTimeInForce.gtc,
    };

    await client.create_order({
        args,
        fields: ['order_id'],
    });
}
main();
