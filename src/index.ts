////@ts-nocheck
import {gql, GraphQLClient, RequestDocument, Variables} from 'graphql-request';
import {RequestConfig} from 'graphql-request/build/esm/types';

export enum UserKycStatus {
    incomplete = 'incomplete',
    rejected = 'rejected',
    approved = 'approved',
    submitted = 'submitted',
}

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

export enum CryptoNetworkFeePreference {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export enum PaymentStatus {
    new = 'new',
    processing = 'processing',
    rejected = 'rejected',
    completed = 'completed',
    unconfirmed = 'unconfirmed',
}

export enum PaymentApprovalStatus {
    pending = 'pending',
    approved = 'approved',
    rejected = 'rejected',
}

export enum ToggleSwitch {
    on = 'on',
    off = 'off',
}

export enum OrderTimeInForce {
    fok = 'fok',
    ioc = 'ioc',
    gtc = 'gtc',
    gtd = 'gtd',
}

export enum OrderType {
    limit = 'limit',
    market = 'market',
    stop_market = 'stop_market',
    stop_limit = 'stop_limit',
}

export enum OrderSide {
    sell = 'sell',
    buy = 'buy',
}

export enum OrderStatus {
    new = 'new',
    pending = 'pending',
    completed = 'completed',
    cancelled = 'cancelled',
    rejected = 'rejected',
    expired = 'expired',
}

export enum OrderQuantityMode {
    base = 'base',
    quote = 'quote',
}

export enum InstrumentHistoryPeriodicity {
    minute = 'minute',
    minute5 = 'minute5',
    minute15 = 'minute15',
    minute30 = 'minute30',
    hour = 'hour',
    hour4 = 'hour4',
    hour8 = 'hour8',
    day = 'day',
    week = 'week',
    month = 'month',
}

export enum InstrumentStrategyHedgingOrderPrice {
    tob = 'tob',
    vwap = 'vwap',
}

export enum KycType {
    individual = 'individual',
    corporate = 'corporate',
}

export enum NotificationTrigger {
    signin = 'signin',
    user_created = 'user_created',
    user_updated = 'user_updated',
    account_created = 'account_created',
    crypto_address_created = 'crypto_address_created',
    kyc_approved = 'kyc_approved',
    kyc_rejected = 'kyc_rejected',
    kyc_incomplete = 'kyc_incomplete',
    trade_completed = 'trade_completed',
    order_new = 'order_new',
    order_completed = 'order_completed',
    order_rejected = 'order_rejected',
    order_cancelled = 'order_cancelled',
    conversion_new = 'conversion_new',
    conversion_completed = 'conversion_completed',
    conversion_rejected = 'conversion_rejected',
    payment_new = 'payment_new',
    payment_rejected = 'payment_rejected',
    payment_completed = 'payment_completed',
    payment_unconfirmed = 'payment_unconfirmed',
    crypto_address_added = 'crypto_address_added',
    manual_balance_update = 'manual_balance_update',
    mfa_enabled = 'mfa_enabled',
    mfa_disabled = 'mfa_disabled',
}

export enum Role {
    admin = 'admin',
    trader = 'trader',
}

export enum ConfigChangeOperationType {
    insert = 'insert',
    update = 'update',
    delete = 'delete',
}

export enum CurrencyType {
    crypto = 'crypto',
    fiat = 'fiat',
}

export enum UserUpdateNotificationClass {
    success = 'success',
    error = 'error',
    info = 'info',
}

export enum AccountTransactionClass {
    trade = 'trade',
    fee = 'fee',
    payment = 'payment',
    reward = 'reward',
    conversion = 'conversion',
    manual = 'manual',
}

export enum AccountTransactionType {
    debit = 'debit',
    credit = 'credit',
}

export enum Permission {
    accounts = 'accounts',
    accounts_balances = 'accounts_balances',
    account_transactions = 'account_transactions',
    create_account_transaction = 'create_account_transaction',
    api_keys = 'api_keys',
    create_api_key = 'create_api_key',
    update_api_key = 'update_api_key',
    delete_api_key = 'delete_api_key',
    cognito_pools = 'cognito_pools',
    create_cognito_pool = 'create_cognito_pool',
    update_cognito_pool = 'update_cognito_pool',
    delete_cognito_pool = 'delete_cognito_pool',
    conversion_quotes = 'conversion_quotes',
    create_conversion_quote = 'create_conversion_quote',
    conversions = 'conversions',
    create_conversion_order = 'create_conversion_order',
    currencies = 'currencies',
    create_currency = 'create_currency',
    update_currency = 'update_currency',
    delete_currency = 'delete_currency',
    fees_groups = 'fees_groups',
    create_fee_group = 'create_fee_group',
    update_fee_group = 'update_fee_group',
    delete_fee_group = 'delete_fee_group',
    payments_fees = 'payments_fees',
    create_payment_fee = 'create_payment_fee',
    update_payment_fee = 'update_payment_fee',
    delete_payment_fee = 'delete_payment_fee',
    trading_fees = 'trading_fees',
    create_trading_fee = 'create_trading_fee',
    update_trading_fee = 'update_trading_fee',
    delete_trading_fee = 'delete_trading_fee',
    instruments_strategies = 'instruments_strategies',
    create_instrument_strategy = 'create_instrument_strategy',
    update_instrument_strategy = 'update_instrument_strategy',
    delete_instrument_strategy = 'delete_instrument_strategy',
    instruments = 'instruments',
    create_instrument = 'create_instrument',
    update_instrument = 'update_instrument',
    delete_instrument = 'delete_instrument',
    limits_groups = 'limits_groups',
    create_limit_group = 'create_limit_group',
    update_limit_group = 'update_limit_group',
    delete_limit_group = 'delete_limit_group',
    payments_limits = 'payments_limits',
    create_payment_limit = 'create_payment_limit',
    update_payment_limit = 'update_payment_limit',
    delete_payment_limit = 'delete_payment_limit',
    trading_limits = 'trading_limits',
    create_trading_limit = 'create_trading_limit',
    update_trading_limit = 'update_trading_limit',
    delete_trading_limit = 'delete_trading_limit',
    payments_routes = 'payments_routes',
    create_payment_route = 'create_payment_route',
    update_payment_route = 'update_payment_route',
    delete_payment_route = 'delete_payment_route',
    create_order = 'create_order',
    cancel_order = 'cancel_order',
    estimate_order = 'estimate_order',
    open_orders = 'open_orders',
    closed_orders = 'closed_orders',
    hedging_orders = 'hedging_orders',
    trades = 'trades',
    hedging_adapters = 'hedging_adapters',
    create_hedging_adapter = 'create_hedging_adapter',
    update_hedging_adapter = 'update_hedging_adapter',
    delete_hedging_adapter = 'delete_hedging_adapter',
    payments = 'payments',
    approve_payments = 'approve_payments',
    create_withdrawal_crypto = 'create_withdrawal_crypto',
    create_withdrawal_fiat = 'create_withdrawal_fiat',
    deposit_bank_details_fiat = 'deposit_bank_details_fiat',
    deposit_addresses_crypto = 'deposit_addresses_crypto',
    update_payment_approval_status = 'update_payment_approval_status',
    system_settings = 'system_settings',
    update_system_settings = 'update_system_settings',
    upload_user_document = 'upload_user_document',
    users = 'users',
    update_user = 'update_user',
    create_user = 'create_user',
    permissions_share = 'permissions_share',
    create_permissions_share = 'create_permissions_share',
    delete_permissions_share = 'delete_permissions_share',
    notification_templates = 'notification_templates',
    update_notification_template = 'update_notification_template',
    create_kyc_sum_and_substance_token = 'create_kyc_sum_and_substance_token',
    create_kyc_prime_trust_token = 'create_kyc_prime_trust_token',
    create_kyc_manual_request = 'create_kyc_manual_request',
    update_kyc_preference = 'update_kyc_preference',
    estimate_network_fee = 'estimate_network_fee',
    webhooks = 'webhooks',
    create_webhook = 'create_webhook',
    update_webhook = 'update_webhook',
    delete_webhook = 'delete_webhook',
    update_maintenance_mode = 'update_maintenance_mode',
    liquidity_report = 'liquidity_report',
    daily_balances_report = 'daily_balances_report',
    timeline = 'timeline',
    find_config_changes = 'find_config_changes',
    create_payment_manual = 'create_payment_manual',
    send_test_email = 'send_test_email',
}

export enum DelayedRequestStatus {
    pending = 'pending',
    approved = 'approved',
    rejected = 'rejected',
}

export enum HedgingOrderStatus {
    new = 'new',
    pending = 'pending',
    completed = 'completed',
    cancelled = 'cancelled',
    rejected = 'rejected',
}

export enum ConversionStatus {
    new = 'new',
    completed = 'completed',
    rejected = 'rejected',
}

export enum Platform {
    android = 'android',
    ios = 'ios',
}

export enum KycProvider {
    PRIMETRUST = 'PRIMETRUST',
    SUM_AND_SUBSTANCE = 'SUM_AND_SUBSTANCE',
    MANUAL = 'MANUAL',
}

export enum VerificationResult {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}

export enum QueryEnum {
    open_orders = 'open_orders',
    closed_orders = 'closed_orders',
    estimate_order = 'estimate_order',
    trades = 'trades',
    sso_settings = 'sso_settings',
    healthcheck = 'healthcheck',
    instruments = 'instruments',
    instrument_price_bars = 'instrument_price_bars',
    currencies = 'currencies',
    deposit_bank_details_fiat = 'deposit_bank_details_fiat',
    payments = 'payments',
    deposit_address_crypto = 'deposit_address_crypto',
    deposit_addresses_crypto = 'deposit_addresses_crypto',
    conversions = 'conversions',
    conversion_quotes = 'conversion_quotes',
    conversion_quotes_risks = 'conversion_quotes_risks',
    users = 'users',
    total_users = 'total_users',
    user = 'user',
    account_transactions = 'account_transactions',
    accounts_balances = 'accounts_balances',
    accounts = 'accounts',
    limits_groups = 'limits_groups',
    fees_groups = 'fees_groups',
    payments_fees = 'payments_fees',
    trading_fees = 'trading_fees',
    payments_routes = 'payments_routes',
    crypto_networks = 'crypto_networks',
    psp_services = 'psp_services',
    payments_limits = 'payments_limits',
    api_keys = 'api_keys',
    cognito_pools = 'cognito_pools',
    instruments_strategies = 'instruments_strategies',
    hedging_orders = 'hedging_orders',
    system_settings = 'system_settings',
    notification_settings = 'notification_settings',
    geo_restrictions = 'geo_restrictions',
    accounts_portfolio_report = 'accounts_portfolio_report',
    orders_summary_report = 'orders_summary_report',
    conversions_summary_report = 'conversions_summary_report',
    liquidity_report = 'liquidity_report',
    daily_balances_report = 'daily_balances_report',
    permissions = 'permissions',
    permissions_subjects = 'permissions_subjects',
    permissions_share = 'permissions_share',
    kyc_preference = 'kyc_preference',
    webhooks = 'webhooks',
    hedging_adapter_ids = 'hedging_adapter_ids',
    hedging_adapters = 'hedging_adapters',
    timeline = 'timeline',
    trading_limits = 'trading_limits',
    trading_volumes = 'trading_volumes',
    countries = 'countries',
    provinces = 'provinces',
    delayed_requests = 'delayed_requests',
    mfa_secret_code = 'mfa_secret_code',
    verify_mfa_secret_token = 'verify_mfa_secret_token',
    find_config_changes = 'find_config_changes',
    config_changes_events = 'config_changes_events',
    get_user_ip_geo_history = 'get_user_ip_geo_history',
    get_user_ip_geo_history_dashboard = 'get_user_ip_geo_history_dashboard',
    portfolio_history = 'portfolio_history',
}

export enum SortDirection {
    ASC = 'ASC',
    DESC = 'DESC',
}

export enum FindPermissionsShareGroupBy {
    user_id = 'user_id',
    subject = 'subject',
}

export enum TradingVolumeType {
    daily = 'daily',
    weekly = 'weekly',
    monthly = 'monthly',
}

export enum AuthenticationProvider {
    cognito = 'cognito',
    auth0 = 'auth0',
    local = 'local',
}

export enum PortfolioHistoryInterval {
    minute = 'minute',
    hour = 'hour',
    day = 'day',
    week = 'week',
    month = 'month',
    year = 'year',
    all = 'all',
}

export enum MutationEnum {
    create_order = 'create_order',
    cancel_multiple_orders = 'cancel_multiple_orders',
    cancel_order = 'cancel_order',
    cancel_all_orders = 'cancel_all_orders',
    trader_demo_signin = 'trader_demo_signin',
    admin_demo_signin = 'admin_demo_signin',
    service_signin = 'service_signin',
    checkin = 'checkin',
    create_instrument = 'create_instrument',
    update_instrument = 'update_instrument',
    delete_instrument = 'delete_instrument',
    fill_instrument = 'fill_instrument',
    create_currency = 'create_currency',
    update_currency = 'update_currency',
    delete_currency = 'delete_currency',
    estimate_network_fee = 'estimate_network_fee',
    validate_address_crypto = 'validate_address_crypto',
    update_payment_approval_status = 'update_payment_approval_status',
    create_withdrawal_crypto = 'create_withdrawal_crypto',
    create_withdrawal_fiat = 'create_withdrawal_fiat',
    create_payment_manual = 'create_payment_manual',
    create_conversion_order = 'create_conversion_order',
    create_conversion_quote = 'create_conversion_quote',
    update_user_fee_group = 'update_user_fee_group',
    update_user_limit_group = 'update_user_limit_group',
    update_user_kyc = 'update_user_kyc',
    create_user_mfa_secret = 'create_user_mfa_secret',
    update_user_mfa_status = 'update_user_mfa_status',
    delete_user = 'delete_user',
    verify_user_mfa_token = 'verify_user_mfa_token',
    add_push_token = 'add_push_token',
    clear_push_tokens = 'clear_push_tokens',
    update_user = 'update_user',
    create_user = 'create_user',
    create_account_transaction = 'create_account_transaction',
    create_limit_group = 'create_limit_group',
    update_limit_group = 'update_limit_group',
    delete_limit_group = 'delete_limit_group',
    create_fee_group = 'create_fee_group',
    update_fee_group = 'update_fee_group',
    delete_fee_group = 'delete_fee_group',
    estimate_payment_fee = 'estimate_payment_fee',
    create_payment_fee = 'create_payment_fee',
    delete_payment_fee = 'delete_payment_fee',
    update_payment_fee = 'update_payment_fee',
    create_trading_fee = 'create_trading_fee',
    update_trading_fee = 'update_trading_fee',
    delete_trading_fee = 'delete_trading_fee',
    create_payment_session = 'create_payment_session',
    create_payment_route = 'create_payment_route',
    delete_payment_route = 'delete_payment_route',
    update_payment_route = 'update_payment_route',
    create_payment_limit = 'create_payment_limit',
    update_payment_limit = 'update_payment_limit',
    delete_payment_limit = 'delete_payment_limit',
    create_api_key = 'create_api_key',
    update_api_key = 'update_api_key',
    delete_api_key = 'delete_api_key',
    create_cognito_pool = 'create_cognito_pool',
    update_cognito_pool = 'update_cognito_pool',
    delete_cognito_pool = 'delete_cognito_pool',
    create_instrument_strategy = 'create_instrument_strategy',
    update_instrument_strategy = 'update_instrument_strategy',
    delete_instrument_strategy = 'delete_instrument_strategy',
    update_system_setting = 'update_system_setting',
    update_system_settings = 'update_system_settings',
    update_maintenance_mode = 'update_maintenance_mode',
    update_notifications_settings = 'update_notifications_settings',
    update_delayed_mutations = 'update_delayed_mutations',
    update_geo_restrictions = 'update_geo_restrictions',
    create_super_admins = 'create_super_admins',
    delete_super_admins = 'delete_super_admins',
    create_readonly_admins = 'create_readonly_admins',
    delete_readonly_admins = 'delete_readonly_admins',
    create_permission_share = 'create_permission_share',
    delete_permission_share = 'delete_permission_share',
    create_kyc_manual_request = 'create_kyc_manual_request',
    create_kyc_sum_and_substance_token = 'create_kyc_sum_and_substance_token',
    create_kyc_session = 'create_kyc_session',
    create_kyc_prime_trust_token = 'create_kyc_prime_trust_token',
    update_kyc_preference = 'update_kyc_preference',
    create_webhook = 'create_webhook',
    update_webhook = 'update_webhook',
    delete_webhook = 'delete_webhook',
    create_hedging_adapter = 'create_hedging_adapter',
    update_hedging_adapter = 'update_hedging_adapter',
    delete_hedging_adapter = 'delete_hedging_adapter',
    create_trading_limit = 'create_trading_limit',
    update_trading_limit = 'update_trading_limit',
    delete_trading_limit = 'delete_trading_limit',
    send_push = 'send_push',
    update_delayed_request = 'update_delayed_request',
    delete_delayed_request = 'delete_delayed_request',
    send_test_email = 'send_test_email',
}

export enum __TypeKind {
    SCALAR = 'SCALAR',
    OBJECT = 'OBJECT',
    INTERFACE = 'INTERFACE',
    UNION = 'UNION',
    ENUM = 'ENUM',
    INPUT_OBJECT = 'INPUT_OBJECT',
    LIST = 'LIST',
    NON_NULL = 'NON_NULL',
}

export enum __DirectiveLocation {
    QUERY = 'QUERY',
    MUTATION = 'MUTATION',
    SUBSCRIPTION = 'SUBSCRIPTION',
    FIELD = 'FIELD',
    FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION',
    FRAGMENT_SPREAD = 'FRAGMENT_SPREAD',
    INLINE_FRAGMENT = 'INLINE_FRAGMENT',
    VARIABLE_DEFINITION = 'VARIABLE_DEFINITION',
    SCHEMA = 'SCHEMA',
    SCALAR = 'SCALAR',
    OBJECT = 'OBJECT',
    FIELD_DEFINITION = 'FIELD_DEFINITION',
    ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION',
    INTERFACE = 'INTERFACE',
    UNION = 'UNION',
    ENUM = 'ENUM',
    ENUM_VALUE = 'ENUM_VALUE',
    INPUT_OBJECT = 'INPUT_OBJECT',
    INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION',
}

export interface FeeGroup {
    fee_group_id: string;
    name?: string;
    description?: string;
    beneficiary_user_id: string;
    kyc_status?: UserKycStatus;
    trading_fees: TradingFee[];
    payment_fees: PaymentFee[];
}

export interface String {
    String?: string;
}

export interface PaymentFee {
    currency_id: string;
    fee_group_id: string;
    withdrawal_progressive_fee?: number;
    withdrawal_flat_fee?: number;
    deposit_progressive_fee?: number;
    deposit_flat_fee?: number;
    fee_group: FeeGroup;
}

export interface Float {
    Float?: number;
}

export interface InstrumentPrice {
    instrument_id: string;
    ask?: number;
    bid?: number;
    price_24h_change?: number;
    ts: string;
    ts_iso: string;
}

export interface Payment {
    payment_id: string;
    remote_txid?: string;
    user_id: string;
    currency_id: string;
    amount: number;
    type: PaymentType;
    psp_service_id?: string;
    psp_event_bridge_event_id?: string;
    crypto_transaction_id?: string;
    crypto_address?: string;
    crypto_address_tag_type?: CryptoAddressTagType;
    crypto_address_tag_value?: string;
    crypto_address_reference?: string;
    crypto_network?: string;
    crypto_source_address?: string;
    crypto_network_fee_preference?: CryptoNetworkFeePreference;
    crypto_network_fee_amount?: number;
    crypto_network_fee_currency?: string;
    crypto_confirmations_received: number;
    fiat_transfer_type?: string;
    fiat_bank_name?: string;
    fiat_bank_country?: string;
    fiat_bank_region?: string;
    fiat_bank_city?: string;
    fiat_bank_address?: string;
    fiat_bank_postal_code?: string;
    fiat_bank_bic?: string;
    fiat_bank_swift?: string;
    fiat_routing_number?: string;
    fiat_reference?: string;
    fiat_notes?: string;
    fiat_beneficiary_name?: string;
    fiat_beneficiary_account_number?: string;
    fiat_beneficiary_country?: string;
    fiat_beneficiary_region?: string;
    fiat_beneficiary_city?: string;
    fiat_beneficiary_address_line_1?: string;
    fiat_beneficiary_address_line_2?: string;
    fiat_beneficiary_postal_code?: string;
    status: PaymentStatus;
    approval_status: PaymentApprovalStatus;
    approval_reason?: string;
    approved_by?: string;
    approved_at?: string;
    body_amount?: number;
    fee_amount?: number;
    record_account_transaction_id?: string;
    revert_account_transaction_id?: string;
    ip_address?: string;
    message?: string;
    error_message?: string;
    reference?: string;
    native_asset?: string;
    created_by?: string;
    created_at: string;
    manual_transaction_date?: string;
    fees_included: ToggleSwitch;
    updated_at: string;
    version: number;
    estimated_crypto_network_fee?: number;
    crypto_estimation_details?: string;
    user: User;
    created_at_iso: string;
    updated_at_iso: string;
    approved_at_iso?: string;
    aml_screening_result?: AmlScreeningResult;
    account_transactions: AccountTransaction[];
}

export interface Int {
    Int?: number;
}

export interface Order {
    serial_id: number;
    order_id: string;
    client_order_id?: string;
    time_in_force: OrderTimeInForce;
    type: OrderType;
    side: OrderSide;
    status: OrderStatus;
    price?: number;
    quantity: number;
    executed_quantity: number;
    remaining_quantity: number;
    quantity_mode: OrderQuantityMode;
    user_id: string;
    instrument_id: string;
    instrument_strategy_id: string;
    message?: string;
    created_at: string;
    updated_at: string;
    expires_at?: string;
    version: number;
    parent_order_id?: string;
    stop_price?: number;
    notes?: string;
    user?: User;
    created_at_iso: string;
    updated_at_iso: string;
    expires_at_iso?: string;
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

export interface Instrument {
    name: string;
    instrument_id: string;
    base_currency_id: string;
    quote_currency_id: string;
    price_decimals: number;
    quantity_decimals?: number;
    quote_quantity_decimals?: number;
    min_quantity: number;
    max_quantity: number;
    min_quote_quantity: number;
    max_quote_quantity: number;
    max_conversion_quote_ttl?: number;
    is_active: ToggleSwitch;
    price_collar?: number;
    price_bars: InstrumentPriceHistory[];
    recent_price_bar?: InstrumentPriceHistory;
    base_currency: Currency;
    quote_currency: Currency;
    trading_fees: TradingFee;
    price?: InstrumentPrice;
}

export interface DateRangeInput {
    time_from?: string;
    time_to?: string;
}

export interface InstrumentStrategy {
    serial_id: number;
    instrument_strategy_id?: string;
    hedging_adapter_id: string;
    instrument_id: string;
    remote_instrument_id?: string;
    loop_interval: number;
    active_layers_count: number;
    layer_discount_factor: number;
    markup_ask: number;
    markup_bid: number;
    order_min_quantity: number;
    order_max_quantity: number;
    order_ttl_ms: number;
    hedge_quantity_trigger_buy: number;
    hedge_quantity_trigger_sell: number;
    hedge_quantity_increment: number;
    hedge_balance?: number;
    conversions_balance?: number;
    hedging_enabled?: ToggleSwitch;
    hedging_order_type?: OrderType;
    hedging_order_time_in_force?: OrderTimeInForce;
    hedging_order_price?: InstrumentStrategyHedgingOrderPrice;
    hedging_order_ttl_ms?: number;
    instruments_settings_sync_enabled?: ToggleSwitch;
    meta?: string;
    error?: string;
    updated_at: string;
    is_active: ToggleSwitch;
    version?: number;
    updated_at_iso: string;
}

export interface LimitGroup {
    limit_group_id: string;
    name?: string;
    description?: string;
    kyc_status?: UserKycStatus;
    payment_limits: PaymentLimit[];
    trading_limits: TradingLimit[];
    disabled_instruments: string[];
    disabled_currencies: string[];
}

export interface User {
    serial_id?: number;
    user_id: string;
    parent_user_id?: string;
    integer_tracking_id: number;
    username?: string;
    email?: string;
    mobile_nr?: string;
    language?: string;
    timezone?: string;
    primary_market_currency?: string;
    is_active: ToggleSwitch;
    first_name?: string;
    last_name?: string;
    address_country?: string;
    address_state?: string;
    address_city?: string;
    address_line_1?: string;
    address_line_2?: string;
    address_zip?: string;
    date_of_birth?: string;
    fee_group_id: string;
    limit_group_id: string;
    kyc_level?: string;
    kyc_status?: UserKycStatus;
    kyc_message?: string;
    created_at: string;
    mfa_for_withdraw?: ToggleSwitch;
    tax_id?: string;
    account_opening_purpose?: string;
    company_registration_nr?: string;
    company_name?: string;
    company_position?: string;
    updated_at: string;
    affiliate_code?: string;
    nationality?: string;
    crypto_pay: ToggleSwitch;
    kyc_type?: KycType;
    unique_id?: string;
    version?: number;
    fee_group: FeeGroup;
    limit_group: LimitGroup;
    favorite_instruments: string[];
    notifications_settings: NotificationTrigger[];
    notifications_options?: NotificationOptions;
    favorite_addresses_crypto: FavoriteAddressCrypto[];
    favorite_fiat_destinations: FavoriteFiatDestination[];
    profile_pic_url?: string;
    company_registration_url?: string;
    memorandum_of_association_url?: string;
    passport_url?: string;
    national_identity_url?: string;
    driver_license_url?: string;
    birth_certificate_url?: string;
    bank_statement_url?: string;
    utility_bill_url?: string;
    proof_of_residence_url?: string;
    proof_of_id_front_url?: string;
    proof_of_id_back_url?: string;
    mfa_status?: ToggleSwitch;
    push_tokens: PushToken[];
    parent_user?: User;
    created_at_iso: string;
    updated_at_iso?: string;
    date_of_birth_iso?: string;
    trading_volumes: UsersTradingVolume[];
}

export interface Setting {
    name: string;
    value?: string;
}

export interface NotificationOptions {
    client: NotificationTrigger[];
    push: NotificationTrigger[];
    email: NotificationTrigger[];
    sms: NotificationTrigger[];
}

export interface RegionBlacklistItem {
    code: string;
    list: BlacklistItem[];
}

export interface BlacklistItem {
    code: string;
    name?: string;
}

export interface GeoRestrictions {
    region_blacklist: RegionBlacklistItem[];
    country_blacklist: BlacklistItem[];
}

export interface PermissionShare {
    user_id: string;
    role_id: Role;
    subject: string;
    shared_by: string;
    shared_at: string;
    shared_at_iso: string;
}

export interface ConfigChange {
    config_change_id: string;
    config_change_group_id: string;
    serial_id: number;
    admin_user_id: string;
    admin_email?: string;
    admin_ip: string;
    args: string;
    table_name: string;
    operation_name: string;
    operation_type: ConfigChangeOperationType;
    items_before?: string;
    items_after?: string;
    diff?: string;
    details: string;
    created_at: string;
}

export interface CognitoPool {
    serial_id?: number;
    name: string;
    cognito_pool_id: string;
    role: Role;
    jwks: string;
    is_active: ToggleSwitch;
}

export interface TradingLimit {
    limit_group_id: string;
    instrument_id: string;
    daily_limit: number;
    weekly_limit: number;
    monthly_limit: number;
    notion_currency?: string;
    limit_group: LimitGroup;
}

export interface UsersTradingVolume {
    user_id: string;
    instrument_id: string;
    daily_volume: number;
    weekly_volume: number;
    monthly_volume: number;
    updated_at: string;
    instrument: Instrument;
    notion_daily_volume?: number;
    notion_weekly_volume?: number;
    notion_monthly_volume?: number;
}

export interface ExposureItem {
    currency_id: string;
    amount: number;
}

export interface Account {
    serial_id?: number;
    account_id: string;
    user_id: string;
    currency_id: string;
    balance: number;
    version: number;
    created_at: string;
    updated_at: string;
    created_at_iso: string;
    updated_at_iso: string;
}

export interface Currency {
    currency_id: string;
    type: CurrencyType;
    precision: number;
    name: string;
    is_active: ToggleSwitch;
    payment_routes: PaymentRoute[];
}

export interface AccountBalance {
    currency_id: string;
    total_balance: number;
    exposed_balance: number;
    free_balance: number;
    currency: Currency;
    free_balance_quoted?: number;
}

export interface EstimateOrderFee {
    currency_id: string;
    amount: number;
}

export interface EstimateOrderResult {
    type: OrderType;
    instrument: Instrument;
    time_in_force: OrderTimeInForce[];
    side: OrderSide;
    price: number;
    quantity_mode: OrderQuantityMode;
    quantity: number;
    fees: EstimateOrderFee[];
}

export interface HedgingAdapter {
    serial_id?: number;
    hedging_adapter_id: string;
    service_url: string;
    service_api_key: string;
    broker_user_id: string;
    hedging_enabled: ToggleSwitch;
    disable_instrument_on_hedging_error: ToggleSwitch;
    disable_strategy_hedging_on_error: ToggleSwitch;
    account_balances_sync_enabled: ToggleSwitch;
    hedging_error_attempts_threshold?: number;
    hedging_error_attempts_count?: number;
    created_at: string;
    created_at_iso: string;
}

export interface OrderbookItem {
    price: number;
    quantity: number;
}

export interface OrderbookUpdateResult {
    instrument_id: string;
    sell: OrderbookItem[];
    buy: OrderbookItem[];
    ts: string;
    ts_iso: string;
}

export interface PaymentRoute {
    payment_route_id: string;
    currency_id: string;
    psp_service_id: string;
    psp_balance: number;
    psp_balance_updated_at?: string;
    fiat_transfer_type?: string;
    fiat_transfer_type_name?: string;
    crypto_network?: string;
    crypto_network_name?: string;
    crypto_address_tag_type?: string;
    fiat_iframe_deposit_url?: string;
    fiat_iframe_withdrawal_url?: string;
    is_active: ToggleSwitch;
    extend_network_fee?: ToggleSwitch;
    network_fee_currency_id?: string;
    is_development?: ToggleSwitch;
    psp_balance_updated_at_iso?: string;
    currency: Currency;
    notes?: string;
    fiat_deposit_details?: FiatDepositDetails;
}

export interface FiatDepositDetails {
    fiat_bank_name?: string;
    fiat_bank_address?: string;
    fiat_bank_bic?: string;
    fiat_routing_number?: string;
    fiat_reference?: string;
    fiat_beneficiary_name?: string;
    fiat_beneficiary_account_number?: string;
    fiat_beneficiary_address_line_1?: string;
    fiat_beneficiary_address_line_2?: string;
}

export interface DepositAddressCrypto {
    deposit_address_crypto_id: string;
    user_id: string;
    currency_id: string;
    address?: string;
    address_tag_type?: CryptoAddressTagType;
    address_tag_value?: string;
    network?: string;
    psp_service_id?: string;
    reference?: string;
    created_at: string;
    updated_at: string;
    created_at_iso: string;
    updated_at_iso: string;
    user: User;
}

export interface UserUpdateNotification {
    title?: string;
    body: string;
    class: UserUpdateNotificationClass;
    reference_nr?: string;
}

export interface EstimateNetworkFeeResultItem {
    fee_per_byte?: number;
    gas_price?: number;
    network_fee?: number;
    base_fee?: number;
    priority_fee?: number;
    gas_limit?: number;
}

export interface EstimateNetworkFeeResult {
    low: EstimateNetworkFeeResultItem;
    medium: EstimateNetworkFeeResultItem;
    high: EstimateNetworkFeeResultItem;
}

export interface AccountTransaction {
    serial_id: number;
    account_transaction_id: string;
    parent_transaction_id: string;
    client_transaction_id?: string;
    user_id: string;
    account_id: string;
    payment_id?: string;
    currency_id: string;
    transaction_class: AccountTransactionClass;
    type: AccountTransactionType;
    order_id?: string;
    trade_id?: string;
    conversion_id?: string;
    amount: number;
    post_balance: number;
    comment?: string;
    created_at: string;
    created_at_iso: string;
    currency?: Currency;
    order?: Order;
    user?: User;
    trade?: Trade;
    payment?: Payment;
    conversion?: Conversion;
}

export interface DepositBankDetailsFiatResult {
    currency_id: string;
    fiat_bank_name?: string;
    fiat_bank_address?: string;
    fiat_bank_bic?: string;
    fiat_routing_number?: string;
    fiat_reference?: string;
    fiat_beneficiary_name?: string;
    fiat_beneficiary_account_number?: string;
    fiat_beneficiary_address_line_1?: string;
    fiat_beneficiary_address_line_2?: string;
    fiat_transfer_type?: string;
    fiat_transfer_type_name?: string;
    fiat_qr_code?: string;
}

export interface PaymentLimit {
    limit_group_id: string;
    currency_id: string;
    deposit_enabled: ToggleSwitch;
    deposit_min_amount: number;
    deposit_daily_limit: number;
    deposit_weekly_limit: number;
    deposit_monthly_limit: number;
    deposit_auto_approval_amount: number;
    withdrawal_enabled: ToggleSwitch;
    withdrawal_min_amount: number;
    withdrawal_daily_limit: number;
    withdrawal_weekly_limit: number;
    withdrawal_monthly_limit: number;
    withdrawal_auto_approval_amount: number;
    limit_group: LimitGroup;
}

export interface ApiKey {
    serial_id: number;
    api_key_id: string;
    name?: string;
    secret_hash: string;
    expires_at: string;
    created_at: string;
    is_active: ToggleSwitch;
    trader_id?: string;
    created_at_iso: string;
    expires_at_iso?: string;
    permissions: Permission[];
    ip_address: string[];
}

export interface CreateApiKeyResult {
    api_key_id: string;
    expires_at: string;
    api_key_secret: string;
}

export interface DelayedRequest {
    serial_id: number;
    delayed_request_id?: string;
    request_name?: string;
    mutation?: string;
    variables?: string;
    approval_status?: DelayedRequestStatus;
    admin_id?: string;
    admin_email?: string;
    admin_ip?: string;
    approved_by?: string;
    approved_by_ip?: string;
    created_at: string;
    approved_at: string;
}

export interface InstrumentPriceHistory {
    instrument_id: string;
    high: number;
    low: number;
    open: number;
    close: number;
    volume_from: number;
    volume_to: number;
    price_24h_change?: number;
    ts: string;
    ts_iso: string;
}

export interface HedgingOrder {
    serial_id: number;
    hedging_order_id: string;
    remote_order_id?: string;
    hedging_adapter_id: string;
    instrument_id: string;
    side: OrderSide;
    status: HedgingOrderStatus;
    type: OrderType;
    limit_price?: number;
    quantity: number;
    executed_quantity: number;
    remaining_quantity: number;
    error_message?: string;
    meta?: string;
    created_at: string;
    updated_at: string;
    expires_at?: string;
    version: number;
    created_at_iso: string;
    updated_at_iso: string;
}

export interface Trade {
    serial_id: number;
    trade_id: string;
    trade_session_id: string;
    instrument_id: string;
    order_id: string;
    side?: string;
    counter_order_id: string;
    user_id: string;
    quantity: number;
    price: number;
    created_at: string;
    created_at_iso: string;
    user?: User;
    order?: Order;
}

export interface SignInResult {
    jwt: string;
    expires_at: number;
}

export interface TimelineEvent {
    user_id: string;
    event_name: NotificationTrigger;
    event_data: string;
    created_at: string;
}

export interface UserIpGeoHistory {
    date_ts: string;
    user_id: string;
    ip_address: string;
    country?: string;
    region?: string;
    lat?: number;
    lon?: number;
}

export interface HealthcheckResult {
    maintenance_message?: string;
    maintenance_mode?: boolean;
}

export interface Boolean {
    Boolean?: boolean;
}

export interface SsoSettingsItem {
    domain: string;
    client_id: string;
    type: string;
    pool_id?: string;
}

export interface SsoSettingsResult {
    admin: SsoSettingsItem;
    trader: SsoSettingsItem;
    trader_mobile: SsoSettingsItem;
}

export interface Country {
    name: string;
    code: string;
    phone_code: string;
}

export interface Province {
    country_code: string;
    province_code: string;
    iso_region?: string;
    full_name: string;
    short_name: string;
    Type: string;
}

export interface ConversionQuotesRisks {
    target_currency_amount_unexecuted: number;
    source_currency_amount_unexecuted: number;
    source_currency_id: string;
    target_currency_id: string;
    instrument_id: string;
}

export interface ConversionQuote {
    conversion_quote_id: string;
    user_id: string;
    source_currency_id: string;
    source_currency_amount: number;
    source_currency_amount_executed: number;
    target_currency_id: string;
    target_currency_amount: number;
    target_currency_amount_executed: number;
    fee_currency_id: string;
    fee_currency_amount: number;
    fee_currency_amount_executed: number;
    instrument_id: string;
    price: number;
    fees_in_price?: ToggleSwitch;
    reference?: string;
    expires_at: string;
    created_at: string;
    updated_at: string;
    user: User;
    created_at_iso: string;
    updated_at_iso?: string;
    expires_at_iso: string;
}

export interface CreateConversionQuoteResult {
    conversion_quote_id: string;
    source_currency_id: string;
    source_currency_amount: number;
    target_currency_id: string;
    target_currency_amount: number;
    fee_currency_id: string;
    fee_currency_amount: number;
    instrument_id: string;
    price: number;
    fees_in_price?: ToggleSwitch;
    expires_at: string;
    fees: EstimateOrderFee[];
    expires_at_iso: string;
    current_time_iso: string;
}

export interface Conversion {
    conversion_id: string;
    conversion_quote_id: string;
    reference?: string;
    source_currency_id: string;
    source_currency_amount: number;
    target_currency_id: string;
    target_currency_amount: number;
    instrument_id: string;
    fee_currency_id: string;
    fee_currency_amount: number;
    price: number;
    status: ConversionStatus;
    user_id: string;
    parent_transaction_id?: string;
    message?: string;
    error_message?: string;
    instrument_strategy_id?: string;
    created_at: string;
    updated_at: string;
    version: number;
    user: User;
    created_at_iso: string;
    updated_at_iso: string;
}

export interface AmlScreeningCluster {
    name: string;
    category: string;
}

export interface AmlScreeningChainAnalysisPayload {
    asset: string;
    rating: string;
    address: string;
    cluster?: AmlScreeningCluster;
    customAddress?: string;
    chainalysisIdentification?: string;
}

export interface AmlScreeningChainAnalysis {
    provider: string;
    payload?: AmlScreeningChainAnalysisPayload;
    screeningStatus: string;
    timestamp: number;
}

export interface AmlScreeningResult {
    chainanalysis?: AmlScreeningChainAnalysis;
}

export interface UserUpdateResult {
    account_transaction?: AccountTransaction;
    account?: Account;
    order?: Order;
    payment?: Payment;
    conversion?: Conversion;
    notification?: UserUpdateNotification;
    healthcheck?: HealthcheckResult;
}

export interface FavoriteAddressCrypto {
    currency_id: string;
    address?: string;
    address_tag_type?: CryptoAddressTagType;
    address_tag_value?: string;
    network?: string;
    name?: string;
    created_at?: string;
}

export interface FavoriteFiatDestination {
    name: string;
    bank_name?: string;
    bank_country?: string;
    bank_region?: string;
    bank_city?: string;
    bank_address?: string;
    bank_postal_code?: string;
    bank_bic?: string;
    bank_swift?: string;
    routing_number?: string;
    reference?: string;
    notes?: string;
    beneficiary_name?: string;
    beneficiary_account_number?: string;
    beneficiary_country?: string;
    beneficiary_region?: string;
    beneficiary_city?: string;
    beneficiary_address_line_1?: string;
    beneficiary_address_line_2?: string;
    beneficiary_postal_code?: string;
}

export interface CreateUserMfaSecretResult {
    secret: string;
    uri: string;
    qr: string;
}

export interface PushToken {
    platform: Platform;
    token: string;
}

export interface CreateAccountTransactionResult {
    parent_transaction_id: string;
    account_transactions: AccountTransaction[];
}

export interface CryptoNetwork {
    crypto_network: string;
    crypto_network_name: string;
}

export interface AccountsPortfolioReportItem {
    currency_id: string;
    balance: number;
}

export interface LiquidityReportBrokerAccountBalanceReportItem {
    currency_id: string;
    total_balance: number;
    exposed_balance: number;
    free_balance: number;
}

export interface LiquidityReportPaymentRouteReportItem {
    currency_id: string;
    psp_service_id: string;
    psp_balance: number;
    psp_balance_updated_at?: string;
    crypto_network?: string;
    psp_balance_updated_at_iso?: string;
}

export interface LiquidityReportStrategyHedgingBalanceReportItem {
    hedging_adapter_id: string;
    instrument_id: string;
    markup_ask: number;
    markup_bid: number;
    hedge_quantity_trigger_buy: number;
    hedge_quantity_trigger_sell: number;
    hedge_quantity_increment: number;
    hedge_balance?: number;
    error?: string;
    is_active: ToggleSwitch;
}

export interface LiquidityReportResult {
    broker: LiquidityReportBrokerAccountBalanceReportItem[];
    payments: LiquidityReportPaymentRouteReportItem[];
    hedging: LiquidityReportStrategyHedgingBalanceReportItem[];
    accounts: AccountsPortfolioReportItem[];
}

export interface OrdersSummaryReportItem {
    instrument_id: string;
    side: OrderSide;
    quantity_mode: OrderQuantityMode;
    trades_count: number;
    executed_quantity: number;
    date_ts: string;
    date_ts_iso: string;
}

export interface ConversionsSummaryReportItem {
    instrument_id: string;
    conversions_count: number;
    source_currency_id: string;
    source_currency_amount: number;
    target_currency_id: string;
    target_currency_amount: number;
    average_price: number;
    date_ts: string;
    date_ts_iso: string;
}

export interface DailyBalancesReportItem {
    timestamp: number;
    balanceInBaseCurrency: number;
}

export interface KycPreference {
    provider: KycProvider;
    provider_url: string;
    type: KycType;
}

export interface Webhook {
    webhook_id: string;
    url: string;
    name: string;
    is_active: ToggleSwitch;
    user_id?: string;
    created_at: string;
    updated_at: string;
    triggers: NotificationTrigger[];
    created_at_iso: string;
    updated_at_iso: string;
}

export interface MfaResult {
    status: VerificationResult;
    accessToken: string;
}

export interface RegionBlacklistItemInput {
    code: string;
}

export interface BlacklistItemInput {
    code: string;
    name?: string;
}

export type QueryType =
    | 'open_orders'
    | 'closed_orders'
    | 'estimate_order'
    | 'trades'
    | 'sso_settings'
    | 'healthcheck'
    | 'instruments'
    | 'instrument_price_bars'
    | 'currencies'
    | 'deposit_bank_details_fiat'
    | 'payments'
    | 'deposit_address_crypto'
    | 'deposit_addresses_crypto'
    | 'conversions'
    | 'conversion_quotes'
    | 'conversion_quotes_risks'
    | 'users'
    | 'total_users'
    | 'user'
    | 'account_transactions'
    | 'accounts_balances'
    | 'accounts'
    | 'limits_groups'
    | 'fees_groups'
    | 'payments_fees'
    | 'trading_fees'
    | 'payments_routes'
    | 'crypto_networks'
    | 'psp_services'
    | 'payments_limits'
    | 'api_keys'
    | 'cognito_pools'
    | 'instruments_strategies'
    | 'hedging_orders'
    | 'system_settings'
    | 'notification_settings'
    | 'geo_restrictions'
    | 'accounts_portfolio_report'
    | 'orders_summary_report'
    | 'conversions_summary_report'
    | 'liquidity_report'
    | 'daily_balances_report'
    | 'permissions'
    | 'permissions_subjects'
    | 'permissions_share'
    | 'kyc_preference'
    | 'webhooks'
    | 'hedging_adapter_ids'
    | 'hedging_adapters'
    | 'timeline'
    | 'trading_limits'
    | 'trading_volumes'
    | 'countries'
    | 'provinces'
    | 'delayed_requests'
    | 'mfa_secret_code'
    | 'verify_mfa_secret_token'
    | 'find_config_changes'
    | 'config_changes_events'
    | 'get_user_ip_geo_history'
    | 'get_user_ip_geo_history_dashboard'
    | 'portfolio_history';

export interface PagerInput {
    limit?: number;
    offset?: number;
}

export interface SortInput {
    direction?: SortDirection;
}

export interface DateTime {
    DateTime?: DateTime;
}

export type MutationType =
    | 'create_order'
    | 'cancel_multiple_orders'
    | 'cancel_order'
    | 'cancel_all_orders'
    | 'trader_demo_signin'
    | 'admin_demo_signin'
    | 'service_signin'
    | 'checkin'
    | 'create_instrument'
    | 'update_instrument'
    | 'delete_instrument'
    | 'fill_instrument'
    | 'create_currency'
    | 'update_currency'
    | 'delete_currency'
    | 'estimate_network_fee'
    | 'validate_address_crypto'
    | 'update_payment_approval_status'
    | 'create_withdrawal_crypto'
    | 'create_withdrawal_fiat'
    | 'create_payment_manual'
    | 'create_conversion_order'
    | 'create_conversion_quote'
    | 'update_user_fee_group'
    | 'update_user_limit_group'
    | 'update_user_kyc'
    | 'create_user_mfa_secret'
    | 'update_user_mfa_status'
    | 'delete_user'
    | 'verify_user_mfa_token'
    | 'add_push_token'
    | 'clear_push_tokens'
    | 'update_user'
    | 'create_user'
    | 'create_account_transaction'
    | 'create_limit_group'
    | 'update_limit_group'
    | 'delete_limit_group'
    | 'create_fee_group'
    | 'update_fee_group'
    | 'delete_fee_group'
    | 'estimate_payment_fee'
    | 'create_payment_fee'
    | 'delete_payment_fee'
    | 'update_payment_fee'
    | 'create_trading_fee'
    | 'update_trading_fee'
    | 'delete_trading_fee'
    | 'create_payment_session'
    | 'create_payment_route'
    | 'delete_payment_route'
    | 'update_payment_route'
    | 'create_payment_limit'
    | 'update_payment_limit'
    | 'delete_payment_limit'
    | 'create_api_key'
    | 'update_api_key'
    | 'delete_api_key'
    | 'create_cognito_pool'
    | 'update_cognito_pool'
    | 'delete_cognito_pool'
    | 'create_instrument_strategy'
    | 'update_instrument_strategy'
    | 'delete_instrument_strategy'
    | 'update_system_setting'
    | 'update_system_settings'
    | 'update_maintenance_mode'
    | 'update_notifications_settings'
    | 'update_delayed_mutations'
    | 'update_geo_restrictions'
    | 'create_super_admins'
    | 'delete_super_admins'
    | 'create_readonly_admins'
    | 'delete_readonly_admins'
    | 'create_permission_share'
    | 'delete_permission_share'
    | 'create_kyc_manual_request'
    | 'create_kyc_sum_and_substance_token'
    | 'create_kyc_session'
    | 'create_kyc_prime_trust_token'
    | 'update_kyc_preference'
    | 'create_webhook'
    | 'update_webhook'
    | 'delete_webhook'
    | 'create_hedging_adapter'
    | 'update_hedging_adapter'
    | 'delete_hedging_adapter'
    | 'create_trading_limit'
    | 'update_trading_limit'
    | 'delete_trading_limit'
    | 'send_push'
    | 'update_delayed_request'
    | 'delete_delayed_request'
    | 'send_test_email';

export interface FavoriteAddressCryptoItem {
    currency_id: string;
    address?: string;
    address_tag_type?: CryptoAddressTagType;
    address_tag_value?: string;
    network?: string;
    name?: string;
}

export interface FavoriteFiatDestinationItem {
    name: string;
    bank_name?: string;
    bank_country?: string;
    bank_region?: string;
    bank_city?: string;
    bank_address?: string;
    bank_postal_code?: string;
    bank_bic?: string;
    bank_swift?: string;
    routing_number?: string;
    reference?: string;
    notes?: string;
    beneficiary_name?: string;
    beneficiary_account_number?: string;
    beneficiary_country?: string;
    beneficiary_region?: string;
    beneficiary_city?: string;
    beneficiary_address_line_1?: string;
    beneficiary_address_line_2?: string;
    beneficiary_postal_code?: string;
}

export interface NotificationOptionsArgs {
    client: NotificationTrigger[];
    push: NotificationTrigger[];
    email: NotificationTrigger[];
    sms: NotificationTrigger[];
}

export interface RecordTransactionItem {
    account_transaction_id?: string;
    user_id: string;
    currency_id: string;
    type: AccountTransactionType;
    transaction_class: AccountTransactionClass;
    amount: number;
    client_transaction_id?: string;
    comment?: string;
    trade_id?: string;
    order_id?: string;
    payment_id?: string;
    conversion_id?: string;
}

export interface FiatDepositDetailsInput {
    fiat_bank_name?: string;
    fiat_bank_address?: string;
    fiat_bank_bic?: string;
    fiat_routing_number?: string;
    fiat_reference?: string;
    fiat_beneficiary_name?: string;
    fiat_beneficiary_account_number?: string;
    fiat_beneficiary_address_line_1?: string;
    fiat_beneficiary_address_line_2?: string;
}

export interface SettingItem {
    name: string;
    value: string;
}

export interface Subscription {
    heartbeat: string;
    orderbook: OrderbookUpdateResult;
    instrument_price: InstrumentPrice;
    instrument_price_bar: InstrumentPriceHistory;
    user_update: UserUpdateResult;
}

export interface __Schema {
    description?: string;
    types: __Type[];
    queryType: __Type;
    mutationType?: __Type;
    subscriptionType?: __Type;
    directives: __Directive[];
}

export interface __Type {
    kind: __TypeKind;
    name?: string;
    description?: string;
    specifiedByURL?: string;
    fields: __Field[];
    interfaces: __Type[];
    possibleTypes: __Type[];
    enumValues: __EnumValue[];
    inputFields: __InputValue[];
    ofType?: __Type;
}

export interface __Field {
    name: string;
    description?: string;
    args: __InputValue[];
    type: __Type;
    isDeprecated: boolean;
    deprecationReason?: string;
}

export interface __InputValue {
    name: string;
    description?: string;
    type: __Type;
    defaultValue?: string;
    isDeprecated: boolean;
    deprecationReason?: string;
}

export interface __EnumValue {
    name: string;
    description?: string;
    isDeprecated: boolean;
    deprecationReason?: string;
}

export interface __Directive {
    name: string;
    description?: string;
    isRepeatable: boolean;
    locations: __DirectiveLocation[];
    args: __InputValue[];
}

export interface CreateOrderArgs {
    user_id?: string;
    client_order_id?: string;
    instrument_id: string;
    quantity: number;
    quantity_mode?: OrderQuantityMode;
    type: OrderType;
    side: OrderSide;
    time_in_force: OrderTimeInForce;
    price?: number;
    expires_at?: string;
    notes?: string;
    stop_price?: number;
    market_price?: number;
}

export interface CancelMultipleOrdersArgs {
    order_ids: string[];
    message?: string;
}

export interface CancelOrderArgs {
    user_id?: string;
    order_id: string;
    message?: string;
}

export interface CancelAllOrdersArgs {
    user_id?: string;
}

export interface TraderDemoSigninArgs {
    username: string;
}

export interface AdminDemoSigninArgs {
    username: string;
}

export interface ServiceSigninArgs {
    service_api_key: string;
    service_api_secret: string;
}

export interface CheckinArgs {}

export interface CreateInstrumentArgs {
    name: string;
    instrument_id: string;
    base_currency_id: string;
    quote_currency_id: string;
    price_decimals: number;
    quantity_decimals?: number;
    quote_quantity_decimals?: number;
    min_quantity: number;
    max_quantity: number;
    min_quote_quantity: number;
    max_quote_quantity: number;
    max_conversion_quote_ttl?: number;
    is_active: ToggleSwitch;
    price_collar?: number;
}

export interface UpdateInstrumentArgs {
    name?: string;
    instrument_id: string;
    base_currency_id?: string;
    quote_currency_id?: string;
    price_decimals?: number;
    quantity_decimals?: number;
    quote_quantity_decimals?: number;
    min_quantity?: number;
    max_quantity?: number;
    min_quote_quantity?: number;
    max_quote_quantity?: number;
    max_conversion_quote_ttl?: number;
    is_active?: ToggleSwitch;
    price_collar?: number;
}

export interface DeleteInstrumentArgs {
    instrument_id: string;
}

export interface FillInstrumentArgs {
    instrument: string;
    dateTo: string;
    limit: number;
    periodicity: InstrumentHistoryPeriodicity;
}

export interface CreateCurrencyArgs {
    currency_id: string;
    type: CurrencyType;
    precision: number;
    name?: string;
    is_active: ToggleSwitch;
}

export interface UpdateCurrencyArgs {
    type?: CurrencyType;
    precision?: number;
    name?: string;
    is_active?: ToggleSwitch;
    currency_id: string;
}

export interface DeleteCurrencyArgs {
    currency_id: string;
}

export interface EstimateNetworkFeeArgs {
    currency_id: string;
    network?: string;
    psp_service_id?: string;
    amount?: number;
    crypto_address?: string;
    crypto_address_tag_type?: CryptoAddressTagType;
    crypto_address_tag_value?: string;
}

export interface ValidateAddressCryptoArgs {
    currency_id: string;
    crypto_address: string;
    crypto_network?: string;
}

export interface UpdatePaymentApprovalStatusArgs {
    payment_id: string;
    approval_status: PaymentApprovalStatus;
    approval_reason?: string;
}

export interface CreateWithdrawalCryptoArgs {
    user_id?: string;
    amount: number;
    currency_id: string;
    psp_service_id?: string;
    crypto_address: string;
    crypto_address_tag_type?: CryptoAddressTagType;
    crypto_address_tag_value?: string;
    crypto_network?: string;
    crypto_network_fee_preference?: CryptoNetworkFeePreference;
    reference?: string;
    mfa_token?: string;
    fees_included?: ToggleSwitch;
    skip_address_validation?: boolean;
}

export interface CreateWithdrawalFiatArgs {
    user_id?: string;
    amount: number;
    currency_id: string;
    psp_service_id?: string;
    fiat_bank_name: string;
    fiat_bank_bic?: string;
    fiat_beneficiary_name: string;
    fiat_beneficiary_account_number: string;
    fiat_beneficiary_address_line_1?: string;
    fiat_beneficiary_address_line_2?: string;
    fiat_bank_address?: string;
    fiat_routing_number?: string;
    fiat_reference?: string;
    fiat_notes?: string;
    fiat_transfer_type?: string;
    reference?: string;
    mfa_token?: string;
    fees_included?: ToggleSwitch;
    fiat_bank_country?: string;
    fiat_bank_region?: string;
    fiat_bank_city?: string;
    fiat_bank_postal_code?: string;
    fiat_beneficiary_country?: string;
    fiat_beneficiary_region?: string;
    fiat_beneficiary_city?: string;
    fiat_beneficiary_postal_code?: string;
    fiat_bank_swift?: string;
    manual_transaction_date?: string;
}

export interface CreatePaymentManualArgs {
    remote_txid?: string;
    user_id: string;
    currency_id: string;
    amount: number;
    type: PaymentType;
    psp_service_id?: string;
    psp_event_bridge_event_id?: string;
    crypto_transaction_id?: string;
    crypto_address?: string;
    crypto_address_tag_type?: CryptoAddressTagType;
    crypto_address_tag_value?: string;
    crypto_address_reference?: string;
    crypto_network?: string;
    crypto_source_address?: string;
    crypto_network_fee_preference?: CryptoNetworkFeePreference;
    crypto_network_fee_amount?: number;
    crypto_network_fee_currency?: string;
    fiat_transfer_type?: string;
    fiat_bank_name?: string;
    fiat_bank_country?: string;
    fiat_bank_region?: string;
    fiat_bank_city?: string;
    fiat_bank_address?: string;
    fiat_bank_postal_code?: string;
    fiat_bank_bic?: string;
    fiat_bank_swift?: string;
    fiat_routing_number?: string;
    fiat_reference?: string;
    fiat_notes?: string;
    fiat_beneficiary_name?: string;
    fiat_beneficiary_account_number?: string;
    fiat_beneficiary_country?: string;
    fiat_beneficiary_region?: string;
    fiat_beneficiary_city?: string;
    fiat_beneficiary_address_line_1?: string;
    fiat_beneficiary_address_line_2?: string;
    fiat_beneficiary_postal_code?: string;
    status?: PaymentStatus;
    approval_status?: PaymentApprovalStatus;
    approval_reason?: string;
    approved_by?: string;
    body_amount?: number;
    fee_amount?: number;
    record_account_transaction_id?: string;
    revert_account_transaction_id?: string;
    ip_address?: string;
    message?: string;
    error_message?: string;
    reference?: string;
    native_asset?: string;
    created_by?: string;
    manual_transaction_date?: string;
    fees_included?: ToggleSwitch;
    estimated_crypto_network_fee?: number;
    crypto_estimation_details?: string;
    create_account_operations: boolean;
    crypto_confirmations_received?: number;
    version?: number;
    approved_at?: string;
    created_at?: string;
    updated_at?: string;
}

export interface CreateConversionOrderArgs {
    user_id?: string;
    conversion_quote_id: string;
    reference?: string;
    source_currency_amount?: number;
    target_currency_amount?: number;
    return_on_complete?: boolean;
}

export interface CreateConversionQuoteArgs {
    user_id?: string;
    source_currency_id: string;
    target_currency_id: string;
    source_currency_amount?: number;
    target_currency_amount?: number;
    fees_in_price?: boolean;
    reference?: string;
    ttl?: number;
    dry_run?: ToggleSwitch;
}

export interface UpdateUserFeeGroupArgs {
    user_id: string;
    fee_group_id: string;
    reason?: string;
}

export interface UpdateUserLimitGroupArgs {
    user_id: string;
    limit_group_id: string;
    reason?: string;
}

export interface UpdateUserKycArgs {
    user_id: string;
    kyc_level?: string;
    kyc_status?: UserKycStatus;
    kyc_message?: string;
    kyc_type?: KycType;
}

export interface CreateUserMfaSecretArgs {}

export interface UpdateUserMfaStatusArgs {
    status: ToggleSwitch;
    secret?: string;
    token: string;
}

export interface DeleteUserArgs {}

export interface VerifyUserMfaTokenArgs {
    token: string;
    user_id?: string;
}

export interface AddPushTokenArgs {
    platform?: Platform;
    token?: string;
}

export interface ClearPushTokensArgs {}

export interface UpdateUserArgs {
    parent_user_id?: string;
    username?: string;
    email?: string;
    mobile_nr?: string;
    language?: string;
    timezone?: string;
    primary_market_currency?: string;
    is_active?: ToggleSwitch;
    first_name?: string;
    last_name?: string;
    address_country?: string;
    address_state?: string;
    address_city?: string;
    address_line_1?: string;
    address_line_2?: string;
    address_zip?: string;
    date_of_birth?: string;
    mfa_for_withdraw?: ToggleSwitch;
    tax_id?: string;
    company_registration_nr?: string;
    company_name?: string;
    company_position?: string;
    updated_at?: string;
    nationality?: string;
    crypto_pay?: ToggleSwitch;
    kyc_type?: KycType;
    unique_id?: string;
    user_id?: string;
    favorite_instruments: string[];
    notifications_settings: NotificationTrigger[];
    mfa_token?: string;
    mfa_status?: ToggleSwitch;
}

export interface CreateUserArgs {
    user_id?: string;
    parent_user_id?: string;
    email?: string;
    mobile_nr?: string;
    language?: string;
    timezone?: string;
    primary_market_currency?: string;
    is_active?: ToggleSwitch;
    first_name?: string;
    last_name?: string;
    address_country?: string;
    address_state?: string;
    address_city?: string;
    address_line_1?: string;
    address_line_2?: string;
    address_zip?: string;
    date_of_birth?: string;
    fee_group_id?: string;
    limit_group_id?: string;
    kyc_level?: string;
    kyc_status?: UserKycStatus;
    kyc_message?: string;
    affiliate_code?: string;
    crypto_pay?: ToggleSwitch;
    kyc_type?: KycType;
    username: string;
    cognito_registration?: ToggleSwitch;
    cognito_email?: ToggleSwitch;
}

export interface CreateAccountTransactionArgs {}

export interface CreateLimitGroupArgs {
    name?: string;
    description?: string;
    kyc_status?: UserKycStatus;
    limit_group_id?: string;
    disabled_currencies: string[];
    disabled_instruments: string[];
}

export interface UpdateLimitGroupArgs {
    name?: string;
    description?: string;
    kyc_status?: UserKycStatus;
    limit_group_id: string;
    disabled_currencies: string[];
    disabled_instruments: string[];
}

export interface DeleteLimitGroupArgs {
    limit_group_id: string;
}

export interface CreateFeeGroupArgs {
    name?: string;
    description?: string;
    kyc_status?: UserKycStatus;
    beneficiary_user_id?: string;
}

export interface UpdateFeeGroupArgs {
    name?: string;
    description?: string;
    beneficiary_user_id?: string;
    kyc_status?: UserKycStatus;
    fee_group_id: string;
}

export interface DeleteFeeGroupArgs {
    fee_group_id: string;
}

export interface EstimatePaymentFeeArgs {
    user_id?: string;
    currency_id: string;
    type: PaymentType;
    amount: number;
    crypto_network?: string;
    psp_service_id?: string;
    crypto_network_fee_preference?: CryptoNetworkFeePreference;
    crypto_address?: string;
    crypto_address_tag_type?: CryptoAddressTagType;
    crypto_address_tag_value?: string;
}

export interface CreatePaymentFeeArgs {
    currency_id: string;
    fee_group_id: string;
    withdrawal_progressive_fee?: number;
    withdrawal_flat_fee?: number;
    deposit_progressive_fee?: number;
    deposit_flat_fee?: number;
}

export interface DeletePaymentFeeArgs {
    currency_id: string;
    fee_group_id: string;
}

export interface UpdatePaymentFeeArgs {
    currency_id: string;
    fee_group_id: string;
    withdrawal_progressive_fee?: number;
    withdrawal_flat_fee?: number;
    deposit_progressive_fee?: number;
    deposit_flat_fee?: number;
}

export interface CreateTradingFeeArgs {
    instrument_id: string;
    fee_group_id: string;
    maker_progressive: number;
    taker_progressive: number;
    maker_flat: number;
    taker_flat: number;
}

export interface UpdateTradingFeeArgs {
    maker_progressive?: number;
    taker_progressive?: number;
    maker_flat?: number;
    taker_flat?: number;
    instrument_id: string;
    fee_group_id: string;
}

export interface DeleteTradingFeeArgs {
    instrument_id: string;
    fee_group_id: string;
}

export interface CreatePaymentSessionArgs {
    payment_route_id: string;
    payment_type: PaymentType;
    mfa_token?: string;
}

export interface CreatePaymentRouteArgs {
    currency_id: string;
    psp_service_id: string;
    crypto_network?: string;
    crypto_network_name?: string;
    crypto_address_tag_type?: string;
    is_active: ToggleSwitch;
    fiat_transfer_type?: string;
    fiat_transfer_type_name?: string;
    fiat_iframe_deposit_url?: string;
    fiat_iframe_withdrawal_url?: string;
    is_development?: ToggleSwitch;
    extend_network_fee?: ToggleSwitch;
    network_fee_currency_id?: string;
}

export interface DeletePaymentRouteArgs {
    payment_route_id: string;
}

export interface UpdatePaymentRouteArgs {
    currency_id?: string;
    psp_service_id?: string;
    fiat_transfer_type?: string;
    fiat_transfer_type_name?: string;
    crypto_network?: string;
    crypto_network_name?: string;
    crypto_address_tag_type?: string;
    fiat_iframe_deposit_url?: string;
    fiat_iframe_withdrawal_url?: string;
    is_active?: ToggleSwitch;
    extend_network_fee?: ToggleSwitch;
    network_fee_currency_id?: string;
    is_development?: ToggleSwitch;
    payment_route_id: string;
}

export interface CreatePaymentLimitArgs {
    limit_group_id: string;
    currency_id: string;
    deposit_enabled: ToggleSwitch;
    deposit_min_amount: number;
    deposit_daily_limit?: number;
    deposit_weekly_limit?: number;
    deposit_monthly_limit?: number;
    deposit_auto_approval_amount: number;
    withdrawal_enabled: ToggleSwitch;
    withdrawal_min_amount: number;
    withdrawal_daily_limit?: number;
    withdrawal_weekly_limit?: number;
    withdrawal_monthly_limit?: number;
    withdrawal_auto_approval_amount: number;
}

export interface UpdatePaymentLimitArgs {
    limit_group_id: string;
    currency_id: string;
    deposit_enabled?: ToggleSwitch;
    deposit_min_amount?: number;
    deposit_daily_limit?: number;
    deposit_weekly_limit?: number;
    deposit_monthly_limit?: number;
    deposit_auto_approval_amount?: number;
    withdrawal_enabled?: ToggleSwitch;
    withdrawal_min_amount?: number;
    withdrawal_daily_limit?: number;
    withdrawal_weekly_limit?: number;
    withdrawal_monthly_limit?: number;
    withdrawal_auto_approval_amount?: number;
}

export interface DeletePaymentLimitArgs {
    limit_group_id: string;
    currency_id: string;
}

export interface CreateApiKeyArgs {
    name?: string;
    expires_at: string;
    is_active: ToggleSwitch;
    user_id?: string;
    ip_address: string[];
    permissions: Permission[];
}

export interface UpdateApiKeyArgs {
    name?: string;
    expires_at?: string;
    is_active?: ToggleSwitch;
    user_id?: string;
    api_key_id: string;
    ip_address: string[];
    permissions: Permission[];
}

export interface DeleteApiKeyArgs {
    api_key_id: string;
    user_id?: string;
}

export interface CreateCognitoPoolArgs {
    cognito_pool_id: string;
    role: Role;
    jwks: string;
    name?: string;
}

export interface UpdateCognitoPoolArgs {
    name?: string;
    role?: Role;
    jwks?: string;
    is_active?: ToggleSwitch;
    cognito_pool_id: string;
}

export interface DeleteCognitoPoolArgs {
    cognito_pool_id?: string;
    multiple_pool_ids: string[];
}

export interface CreateInstrumentStrategyArgs {
    hedging_adapter_id: string;
    instrument_id: string;
    remote_instrument_id?: string;
    loop_interval: number;
    active_layers_count: number;
    layer_discount_factor: number;
    markup_ask: number;
    markup_bid: number;
    order_min_quantity: number;
    order_max_quantity: number;
    order_ttl_ms: number;
    hedge_quantity_trigger_buy: number;
    hedge_quantity_trigger_sell: number;
    hedge_quantity_increment: number;
    conversions_balance?: number;
    hedging_enabled?: ToggleSwitch;
    hedging_order_type?: OrderType;
    hedging_order_time_in_force?: OrderTimeInForce;
    hedging_order_price?: InstrumentStrategyHedgingOrderPrice;
    hedging_order_ttl_ms?: number;
    instruments_settings_sync_enabled?: ToggleSwitch;
    is_active: ToggleSwitch;
    version?: number;
}

export interface UpdateInstrumentStrategyArgs {
    hedging_adapter_id?: string;
    instrument_id?: string;
    remote_instrument_id?: string;
    loop_interval?: number;
    active_layers_count?: number;
    layer_discount_factor?: number;
    markup_ask?: number;
    markup_bid?: number;
    order_min_quantity?: number;
    order_max_quantity?: number;
    order_ttl_ms?: number;
    hedge_quantity_trigger_buy?: number;
    hedge_quantity_trigger_sell?: number;
    hedge_quantity_increment?: number;
    hedging_enabled?: ToggleSwitch;
    hedging_order_type?: OrderType;
    hedging_order_price?: InstrumentStrategyHedgingOrderPrice;
    hedging_order_ttl_ms?: number;
    instruments_settings_sync_enabled?: ToggleSwitch;
    meta?: string;
    is_active?: ToggleSwitch;
    instrument_strategy_id: string;
}

export interface DeleteInstrumentStrategyArgs {
    hedging_adapter_id: string;
    instrument_id: string;
}

export interface UpdateSystemSettingArgs {
    name: string;
    value?: string;
}

export interface UpdateSystemSettingsArgs {}

export interface UpdateMaintenanceModeArgs {
    maintenance_mode: ToggleSwitch;
    maintenance_message: string;
}

export interface UpdateNotificationsSettingsArgs {
    client: NotificationTrigger[];
    push: NotificationTrigger[];
    email: NotificationTrigger[];
    sms: NotificationTrigger[];
}

export interface UpdateDelayedMutationsArgs {
    mutations: string[];
}

export interface UpdateGeoRestrictionsArgs {}

export interface CreateSuperAdminsArgs {
    emails: string[];
}

export interface DeleteSuperAdminsArgs {
    emails: string[];
}

export interface CreateReadonlyAdminsArgs {
    emails: string[];
}

export interface DeleteReadonlyAdminsArgs {
    emails: string[];
}

export interface CreatePermissionShareArgs {
    user_id: string;
    role_id: Role;
    subject: string;
}

export interface DeletePermissionShareArgs {
    user_id: string;
    role_id: Role;
    subject: string;
}

export interface CreateKycManualRequestArgs {
    mobile_nr?: string;
    first_name?: string;
    last_name?: string;
    address_country?: string;
    address_state?: string;
    address_city?: string;
    address_line_1?: string;
    address_line_2?: string;
    address_zip?: string;
    date_of_birth?: string;
    tax_id?: string;
    account_opening_purpose?: string;
    company_registration_nr?: string;
    company_name?: string;
    company_position?: string;
    nationality?: string;
    unique_id?: string;
    user_id?: string;
}

export interface CreateKycSumAndSubstanceTokenArgs {
    level_name: string;
    user_id?: string;
}

export interface CreateKycSessionArgs {
    kyc_service_id: string;
    user_id?: string;
}

export interface CreateKycPrimeTrustTokenArgs {
    is_company: boolean;
    user_id?: string;
}

export interface UpdateKycPreferenceArgs {
    provider?: KycProvider;
    provider_url?: string;
    type?: KycType;
}

export interface CreateWebhookArgs {
    name: string;
    is_active: ToggleSwitch;
    user_id?: string;
    url: string;
    triggers: NotificationTrigger[];
}

export interface UpdateWebhookArgs {
    name?: string;
    is_active?: ToggleSwitch;
    webhook_id: string;
    url?: string;
    triggers: NotificationTrigger[];
}

export interface DeleteWebhookArgs {
    webhook_id: string;
}

export interface CreateHedgingAdapterArgs {
    hedging_adapter_id: string;
    service_url: string;
    service_api_key: string;
    broker_user_id: string;
    hedging_enabled: ToggleSwitch;
    hedging_order_type?: OrderType;
    hedging_order_ttl_ms?: number;
    instruments_settings_sync_enabled?: ToggleSwitch;
    disable_instrument_on_hedging_error: ToggleSwitch;
    disable_strategy_hedging_on_error: ToggleSwitch;
    account_balances_sync_enabled: ToggleSwitch;
    hedging_error_attempts_threshold?: number;
    hedging_error_attempts_count?: number;
    create_broker_user_id?: boolean;
}

export interface UpdateHedgingAdapterArgs {
    service_url?: string;
    service_api_key?: string;
    broker_user_id?: string;
    hedging_enabled?: ToggleSwitch;
    hedging_order_type?: OrderType;
    instruments_settings_sync_enabled?: ToggleSwitch;
    disable_instrument_on_hedging_error?: ToggleSwitch;
    disable_strategy_hedging_on_error?: ToggleSwitch;
    account_balances_sync_enabled?: ToggleSwitch;
    hedging_error_attempts_threshold?: number;
    hedging_error_attempts_count?: number;
    hedging_adapter_id: string;
    create_broker_user_id?: boolean;
}

export interface DeleteHedgingAdapterArgs {
    hedging_adapter_id: string;
}

export interface CreateTradingLimitArgs {
    limit_group_id: string;
    instrument_id: string;
    daily_limit?: number;
    weekly_limit?: number;
    monthly_limit?: number;
    notion_currency?: string;
}

export interface UpdateTradingLimitArgs {
    limit_group_id: string;
    instrument_id: string;
    daily_limit?: number;
    weekly_limit?: number;
    monthly_limit?: number;
    notion_currency?: string;
}

export interface DeleteTradingLimitArgs {
    limit_group_id: string;
    instrument_id: string;
}

export interface SendPushArgs {
    title: string;
    message: string;
    body: string;
}

export interface UpdateDelayedRequestArgs {
    delayed_request_id?: string;
    approval_status?: DelayedRequestStatus;
}

export interface DeleteDelayedRequestArgs {
    delayed_request_id?: string;
}

export interface SendTestEmailArgs {
    trigger: NotificationTrigger;
    to: string;
}

export interface OpenOrdersArgs {
    order_id?: string;
    client_order_id?: string;
    time_in_force?: OrderTimeInForce;
    side?: OrderSide;
    instrument_id?: string;
    message?: string;
    user_id?: string;
    search?: string;
    status: OrderStatus[];
}

export interface ClosedOrdersArgs {
    order_id?: string;
    client_order_id?: string;
    time_in_force?: OrderTimeInForce;
    side?: OrderSide;
    instrument_id?: string;
    message?: string;
    user_id?: string;
    search?: string;
    status: OrderStatus[];
}

export interface EstimateOrderArgs {
    user_id?: string;
    source_currency_id: string;
    source_currency_amount?: number;
    target_currency_id: string;
    target_currency_amount?: number;
    price?: number;
}

export interface TradesArgs {
    trade_id?: string;
    instrument_id?: string;
    order_id?: string;
    side?: string;
    counter_order_id?: string;
    user_id?: string;
    search?: string;
}

export interface SsoSettingsArgs {}

export interface HealthcheckArgs {}

export interface InstrumentsArgs {
    instrument_id?: string;
    is_active?: ToggleSwitch;
    search?: string;
}

export interface InstrumentPriceBarsArgs {
    periodicity?: InstrumentHistoryPeriodicity;
    limit?: number;
    instrument_id: string;
}

export interface CurrenciesArgs {
    search?: string;
    type?: CurrencyType;
}

export interface DepositBankDetailsFiatArgs {
    user_id?: string;
    currency_id: string;
    fiat_transfer_type?: string;
}

export interface PaymentsArgs {
    payment_id?: string;
    currency_id?: string;
    type?: PaymentType;
    reference?: string;
    created_by?: string;
    payment_id_in: string[];
    payment_id_not_in: string[];
    user_id?: string;
    user_id_in: string[];
    user_id_not_in: string[];
    search?: string;
    status: PaymentStatus[];
    approval_status: PaymentApprovalStatus[];
}

export interface DepositAddressCryptoArgs {
    user_id?: string;
    currency_id: string;
    network?: string;
    reference?: string;
    psp_service_id?: string;
}

export interface DepositAddressesCryptoArgs {
    deposit_address_crypto_id?: string;
    currency_id?: string;
    address?: string;
    address_tag_type?: CryptoAddressTagType;
    address_tag_value?: string;
    network?: string;
    psp_service_id?: string;
    reference?: string;
    user_id?: string;
    search?: string;
}

export interface ConversionsArgs {
    user_id?: string;
    search?: string;
    conversion_quote_id?: string;
    source_currency_id?: string;
    target_currency_id?: string;
}

export interface ConversionQuotesArgs {
    user_id?: string;
    search?: string;
    conversion_quote_id?: string;
    source_currency_id?: string;
    target_currency_id?: string;
}

export interface ConversionQuotesRisksArgs {
    source_currency_id?: string;
    target_currency_id?: string;
    instrument_id?: string;
    include_all_quotes?: boolean;
    user_id?: string;
}

export interface UsersArgs {
    parent_user_id?: string;
    username?: string;
    email?: string;
    kyc_level?: string;
    kyc_status?: UserKycStatus;
    affiliate_code?: string;
    user_id?: string;
    search?: string;
}

export interface TotalUsersArgs {}

export interface UserArgs {
    user_id?: string;
}

export interface AccountTransactionsArgs {
    account_transaction_id?: string;
    parent_transaction_id?: string;
    client_transaction_id?: string;
    account_id?: string;
    payment_id?: string;
    currency_id?: string;
    transaction_class?: AccountTransactionClass;
    type?: AccountTransactionType;
    order_id?: string;
    trade_id?: string;
    conversion_id?: string;
    comment?: string;
    user_id?: string;
    search?: string;
    instrument_id?: string;
}

export interface AccountsBalancesArgs {
    user_id?: string;
}

export interface AccountsArgs {
    account_id?: string;
    currency_id?: string;
    user_id?: string;
}

export interface LimitsGroupsArgs {
    limit_group_id?: string;
    name?: string;
    description?: string;
}

export interface FeesGroupsArgs {
    fee_group_id?: string;
    name?: string;
    description?: string;
    beneficiary_user_id?: string;
}

export interface PaymentsFeesArgs {
    currency_id?: string;
    fee_group_id?: string;
}

export interface TradingFeesArgs {
    instrument_id?: string;
    fee_group_id?: string;
}

export interface PaymentsRoutesArgs {
    payment_route_id?: string;
    currency_id?: string;
    psp_service_id?: string;
    crypto_network?: string;
}

export interface CryptoNetworksArgs {}

export interface PspServicesArgs {}

export interface PaymentsLimitsArgs {
    limit_group_id?: string;
    currency_id?: string;
}

export interface ApiKeysArgs {
    user_id?: string;
    search?: string;
}

export interface CognitoPoolsArgs {
    search?: string;
}

export interface InstrumentsStrategiesArgs {
    hedging_adapter_id?: string;
    instrument_id?: string;
    search?: string;
}

export interface HedgingOrdersArgs {
    hedging_adapter_id?: string;
    side?: OrderSide;
    status?: HedgingOrderStatus;
    error_message?: string;
    search?: string;
}

export interface SystemSettingsArgs {
    search?: string;
}

export interface NotificationSettingsArgs {}

export interface GeoRestrictionsArgs {}

export interface AccountsPortfolioReportArgs {
    currencies: string[];
}

export interface OrdersSummaryReportArgs {
    user_id?: string;
}

export interface ConversionsSummaryReportArgs {
    user_id?: string;
}

export interface LiquidityReportArgs {}

export interface DailyBalancesReportArgs {
    user_id?: string;
}

export interface PermissionsArgs {}

export interface PermissionsSubjectsArgs {}

export interface PermissionsShareArgs {
    search?: string;
    user_id?: string;
    subject?: string;
    group_by?: FindPermissionsShareGroupBy;
}

export interface KycPreferenceArgs {}

export interface WebhooksArgs {
    is_active?: ToggleSwitch;
    user_id?: string;
    search?: string;
}

export interface HedgingAdapterIdsArgs {}

export interface HedgingAdaptersArgs {}

export interface TimelineArgs {
    user_id?: string;
    event_data?: string;
    created_at?: string;
    search?: string;
    event_name: NotificationTrigger[];
}

export interface TradingLimitsArgs {
    limit_group_id?: string;
    instrument_id?: string;
}

export interface TradingVolumesArgs {
    user_id?: string;
    instrument_id?: string;
    volume?: TradingVolumeType;
}

export interface CountriesArgs {
    search?: string;
}

export interface ProvincesArgs {
    country_code: string;
    search?: string;
}

export interface DelayedRequestsArgs {
    delayed_request_id?: string;
    request_name?: string;
    approval_status?: DelayedRequestStatus;
    admin_id?: string;
    admin_email?: string;
    approved_by?: string;
    search?: string;
}

export interface MfaSecretCodeArgs {
    access_token?: string;
    provider: AuthenticationProvider;
}

export interface VerifyMfaSecretTokenArgs {
    secret_token: string;
    provider: AuthenticationProvider;
    access_token?: string;
}

export interface FindConfigChangesArgs {
    config_change_id?: string;
    config_change_group_id?: string;
    admin_user_id?: string;
    admin_email?: string;
    admin_ip?: string;
    table_name?: string;
    operation_name?: string;
    operation_type?: ConfigChangeOperationType;
    details?: string;
    search?: string;
}

export interface ConfigChangesEventsArgs {}

export interface GetUserIpGeoHistoryArgs {
    date_ts?: string;
    user_id?: string;
    ip_address?: string;
    country?: string;
}

export interface GetUserIpGeoHistoryDashboardArgs {
    ip_address?: string;
    from_date?: DateTime;
    to_date?: string;
}

export interface PortfolioHistoryArgs {
    currency_id: string;
    user_id?: string;
    timestamp: string;
    interval: PortfolioHistoryInterval;
}

export function buildGraphQLQuery(fields) {
    const queryFields = fields.map((field) => {
        if (typeof field === 'string') {
            return field;
        } else if (typeof field === 'object') {
            const [key, subFields] = Object.entries(field)[0];
            const subQuery = buildGraphQLQuery(subFields);
            return `${key} { ${subQuery} }`;
        }
    });

    return queryFields.join(' ');
}

export class ShiftV4Sdk {
    private gql_client: GraphQLClient;
    private global_headers: {[x: string]: string} = {};

    constructor(endpoint: string, options?: RequestConfig | undefined) {
        this.gql_client = new GraphQLClient(endpoint, options);
    }

    setGlobalCustomHeader(header_name: string, value: any): void {
        this.global_headers[header_name] = value;
    }

    setGlobalAuthToken(token: string): void {
        this.global_headers['authorization'] = `Bearer ${token}`;
    }

    async gql_request(document: RequestDocument, variables?: any, requestHeaders?: HeadersInit, name?: string) {
        return this.gql_client.request(document, variables, {...this.global_headers, ...requestHeaders}).then((res) => {
            if (name) return res[name];
            return res;
        });
    }

    async create_order({
        args,
        fields,
        headers,
    }: {
        args: CreateOrderArgs;
        fields: (keyof Order | Partial<Record<keyof Order, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Order> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($user_id: String,$client_order_id: String,$instrument_id: String!,$quantity: Float!,$quantity_mode: OrderQuantityMode,$type: OrderType!,$side: OrderSide!,$time_in_force: OrderTimeInForce!,$price: Float,$expires_at: String,$notes: String,$stop_price: Float,$market_price: Float) {
                    create_order(user_id:$user_id,client_order_id:$client_order_id,instrument_id:$instrument_id,quantity:$quantity,quantity_mode:$quantity_mode,type:$type,side:$side,time_in_force:$time_in_force,price:$price,expires_at:$expires_at,notes:$notes,stop_price:$stop_price,market_price:$market_price)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_order',
        );
    }

    async cancel_multiple_orders({
        args,
        headers,
    }: {
        args: CancelMultipleOrdersArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($order_ids: String!, $message: String) {
                    cancel_multiple_orders(order_ids: $order_ids, message: $message)
                }
            `,
            args || {},
            headers,
            'cancel_multiple_orders',
        );
    }

    async cancel_order({args, headers}: {args: CancelOrderArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($user_id: String, $order_id: String!, $message: String) {
                    cancel_order(user_id: $user_id, order_id: $order_id, message: $message)
                }
            `,
            args || {},
            headers,
            'cancel_order',
        );
    }

    async cancel_all_orders({
        args,
        fields,
        headers,
    }: {
        args?: CancelAllOrdersArgs;
        fields: (keyof Order | Partial<Record<keyof Order[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Order[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($user_id: String) {
                    cancel_all_orders(user_id:$user_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'cancel_all_orders',
        );
    }

    async trader_demo_signin({
        args,
        fields,
        headers,
    }: {
        args: TraderDemoSigninArgs;
        fields: (keyof SignInResult | Partial<Record<keyof SignInResult, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<SignInResult> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($username: String!) {
                    trader_demo_signin(username:$username)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'trader_demo_signin',
        );
    }

    async admin_demo_signin({
        args,
        fields,
        headers,
    }: {
        args: AdminDemoSigninArgs;
        fields: (keyof SignInResult | Partial<Record<keyof SignInResult, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<SignInResult> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($username: String!) {
                    admin_demo_signin(username:$username)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'admin_demo_signin',
        );
    }

    async service_signin({
        args,
        fields,
        headers,
    }: {
        args: ServiceSigninArgs;
        fields: (keyof SignInResult | Partial<Record<keyof SignInResult, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<SignInResult> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($service_api_key: String!,$service_api_secret: String!) {
                    service_signin(service_api_key:$service_api_key,service_api_secret:$service_api_secret)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'service_signin',
        );
    }

    async checkin({headers}: {headers?: HeadersInit} = {}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation {
                    checkin
                }
            `,
            {},
            headers,
            'checkin',
        );
    }

    async create_instrument({
        args,
        fields,
        headers,
    }: {
        args: CreateInstrumentArgs;
        fields: (keyof Instrument | Partial<Record<keyof Instrument, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Instrument> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($name: String!,$instrument_id: String!,$base_currency_id: String!,$quote_currency_id: String!,$price_decimals: Float!,$quantity_decimals: Int,$quote_quantity_decimals: Int,$min_quantity: Float!,$max_quantity: Float!,$min_quote_quantity: Float!,$max_quote_quantity: Float!,$max_conversion_quote_ttl: Int,$is_active: ToggleSwitch!,$price_collar: Float) {
                    create_instrument(name:$name,instrument_id:$instrument_id,base_currency_id:$base_currency_id,quote_currency_id:$quote_currency_id,price_decimals:$price_decimals,quantity_decimals:$quantity_decimals,quote_quantity_decimals:$quote_quantity_decimals,min_quantity:$min_quantity,max_quantity:$max_quantity,min_quote_quantity:$min_quote_quantity,max_quote_quantity:$max_quote_quantity,max_conversion_quote_ttl:$max_conversion_quote_ttl,is_active:$is_active,price_collar:$price_collar)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_instrument',
        );
    }

    async update_instrument({args, headers}: {args: UpdateInstrumentArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $name: String
                    $instrument_id: String!
                    $base_currency_id: String
                    $quote_currency_id: String
                    $price_decimals: Float
                    $quantity_decimals: Int
                    $quote_quantity_decimals: Int
                    $min_quantity: Float
                    $max_quantity: Float
                    $min_quote_quantity: Float
                    $max_quote_quantity: Float
                    $max_conversion_quote_ttl: Int
                    $is_active: ToggleSwitch
                    $price_collar: Float
                ) {
                    update_instrument(
                        name: $name
                        instrument_id: $instrument_id
                        base_currency_id: $base_currency_id
                        quote_currency_id: $quote_currency_id
                        price_decimals: $price_decimals
                        quantity_decimals: $quantity_decimals
                        quote_quantity_decimals: $quote_quantity_decimals
                        min_quantity: $min_quantity
                        max_quantity: $max_quantity
                        min_quote_quantity: $min_quote_quantity
                        max_quote_quantity: $max_quote_quantity
                        max_conversion_quote_ttl: $max_conversion_quote_ttl
                        is_active: $is_active
                        price_collar: $price_collar
                    )
                }
            `,
            args || {},
            headers,
            'update_instrument',
        );
    }

    async delete_instrument({args, headers}: {args: DeleteInstrumentArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($instrument_id: String!) {
                    delete_instrument(instrument_id: $instrument_id)
                }
            `,
            args || {},
            headers,
            'delete_instrument',
        );
    }

    async fill_instrument({args, headers}: {args: FillInstrumentArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $instrument: String!
                    $dateTo: String!
                    $limit: Float!
                    $periodicity: InstrumentHistoryPeriodicity!
                ) {
                    fill_instrument(instrument: $instrument, dateTo: $dateTo, limit: $limit, periodicity: $periodicity)
                }
            `,
            args || {},
            headers,
            'fill_instrument',
        );
    }

    async create_currency({
        args,
        fields,
        headers,
    }: {
        args: CreateCurrencyArgs;
        fields: (keyof Currency | Partial<Record<keyof Currency, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Currency> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($currency_id: String!,$type: CurrencyType!,$precision: Int!,$name: String,$is_active: ToggleSwitch!) {
                    create_currency(currency_id:$currency_id,type:$type,precision:$precision,name:$name,is_active:$is_active)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_currency',
        );
    }

    async update_currency({args, headers}: {args: UpdateCurrencyArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $type: CurrencyType
                    $precision: Int
                    $name: String
                    $is_active: ToggleSwitch
                    $currency_id: String!
                ) {
                    update_currency(
                        type: $type
                        precision: $precision
                        name: $name
                        is_active: $is_active
                        currency_id: $currency_id
                    )
                }
            `,
            args || {},
            headers,
            'update_currency',
        );
    }

    async delete_currency({args, headers}: {args: DeleteCurrencyArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($currency_id: String!) {
                    delete_currency(currency_id: $currency_id)
                }
            `,
            args || {},
            headers,
            'delete_currency',
        );
    }

    async estimate_network_fee({
        args,
        fields,
        headers,
    }: {
        args: EstimateNetworkFeeArgs;
        fields: (keyof EstimateNetworkFeeResult | Partial<Record<keyof EstimateNetworkFeeResult, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<EstimateNetworkFeeResult> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($currency_id: String!,$network: String,$psp_service_id: String,$amount: Float,$crypto_address: String,$crypto_address_tag_type: CryptoAddressTagType,$crypto_address_tag_value: String) {
                    estimate_network_fee(currency_id:$currency_id,network:$network,psp_service_id:$psp_service_id,amount:$amount,crypto_address:$crypto_address,crypto_address_tag_type:$crypto_address_tag_type,crypto_address_tag_value:$crypto_address_tag_value)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'estimate_network_fee',
        );
    }

    async validate_address_crypto({
        args,
        headers,
    }: {
        args: ValidateAddressCryptoArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($currency_id: String!, $crypto_address: String!, $crypto_network: String) {
                    validate_address_crypto(
                        currency_id: $currency_id
                        crypto_address: $crypto_address
                        crypto_network: $crypto_network
                    )
                }
            `,
            args || {},
            headers,
            'validate_address_crypto',
        );
    }

    async update_payment_approval_status({
        args,
        headers,
    }: {
        args: UpdatePaymentApprovalStatusArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($payment_id: String!, $approval_status: PaymentApprovalStatus!, $approval_reason: String) {
                    update_payment_approval_status(
                        payment_id: $payment_id
                        approval_status: $approval_status
                        approval_reason: $approval_reason
                    )
                }
            `,
            args || {},
            headers,
            'update_payment_approval_status',
        );
    }

    async create_withdrawal_crypto({
        args,
        fields,
        headers,
    }: {
        args: CreateWithdrawalCryptoArgs;
        fields: (keyof Payment | Partial<Record<keyof Payment, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Payment> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($user_id: String,$amount: Float!,$currency_id: String!,$psp_service_id: String,$crypto_address: String!,$crypto_address_tag_type: CryptoAddressTagType,$crypto_address_tag_value: String,$crypto_network: String,$crypto_network_fee_preference: String,$reference: String,$mfa_token: String,$fees_included: ToggleSwitch,$skip_address_validation: Boolean) {
                    create_withdrawal_crypto(user_id:$user_id,amount:$amount,currency_id:$currency_id,psp_service_id:$psp_service_id,crypto_address:$crypto_address,crypto_address_tag_type:$crypto_address_tag_type,crypto_address_tag_value:$crypto_address_tag_value,crypto_network:$crypto_network,crypto_network_fee_preference:$crypto_network_fee_preference,reference:$reference,mfa_token:$mfa_token,fees_included:$fees_included,skip_address_validation:$skip_address_validation)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_withdrawal_crypto',
        );
    }

    async create_withdrawal_fiat({
        args,
        fields,
        headers,
    }: {
        args: CreateWithdrawalFiatArgs;
        fields: (keyof Payment | Partial<Record<keyof Payment, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Payment> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($user_id: String,$amount: Float!,$currency_id: String!,$psp_service_id: String,$fiat_bank_name: String!,$fiat_bank_bic: String,$fiat_beneficiary_name: String!,$fiat_beneficiary_account_number: String!,$fiat_beneficiary_address_line_1: String,$fiat_beneficiary_address_line_2: String,$fiat_bank_address: String,$fiat_routing_number: String,$fiat_reference: String,$fiat_notes: String,$fiat_transfer_type: String,$reference: String,$mfa_token: String,$fees_included: ToggleSwitch,$fiat_bank_country: String,$fiat_bank_region: String,$fiat_bank_city: String,$fiat_bank_postal_code: String,$fiat_beneficiary_country: String,$fiat_beneficiary_region: String,$fiat_beneficiary_city: String,$fiat_beneficiary_postal_code: String,$fiat_bank_swift: String,$manual_transaction_date: String) {
                    create_withdrawal_fiat(user_id:$user_id,amount:$amount,currency_id:$currency_id,psp_service_id:$psp_service_id,fiat_bank_name:$fiat_bank_name,fiat_bank_bic:$fiat_bank_bic,fiat_beneficiary_name:$fiat_beneficiary_name,fiat_beneficiary_account_number:$fiat_beneficiary_account_number,fiat_beneficiary_address_line_1:$fiat_beneficiary_address_line_1,fiat_beneficiary_address_line_2:$fiat_beneficiary_address_line_2,fiat_bank_address:$fiat_bank_address,fiat_routing_number:$fiat_routing_number,fiat_reference:$fiat_reference,fiat_notes:$fiat_notes,fiat_transfer_type:$fiat_transfer_type,reference:$reference,mfa_token:$mfa_token,fees_included:$fees_included,fiat_bank_country:$fiat_bank_country,fiat_bank_region:$fiat_bank_region,fiat_bank_city:$fiat_bank_city,fiat_bank_postal_code:$fiat_bank_postal_code,fiat_beneficiary_country:$fiat_beneficiary_country,fiat_beneficiary_region:$fiat_beneficiary_region,fiat_beneficiary_city:$fiat_beneficiary_city,fiat_beneficiary_postal_code:$fiat_beneficiary_postal_code,fiat_bank_swift:$fiat_bank_swift,manual_transaction_date:$manual_transaction_date)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_withdrawal_fiat',
        );
    }

    async create_payment_manual({
        args,
        fields,
        headers,
    }: {
        args: CreatePaymentManualArgs;
        fields: (keyof Payment | Partial<Record<keyof Payment, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Payment> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($remote_txid: String,$user_id: String!,$currency_id: String!,$amount: Float!,$type: PaymentType!,$psp_service_id: String,$psp_event_bridge_event_id: String,$crypto_transaction_id: String,$crypto_address: String,$crypto_address_tag_type: CryptoAddressTagType,$crypto_address_tag_value: String,$crypto_address_reference: String,$crypto_network: String,$crypto_source_address: String,$crypto_network_fee_preference: String,$crypto_network_fee_amount: Float,$crypto_network_fee_currency: String,$fiat_transfer_type: String,$fiat_bank_name: String,$fiat_bank_country: String,$fiat_bank_region: String,$fiat_bank_city: String,$fiat_bank_address: String,$fiat_bank_postal_code: String,$fiat_bank_bic: String,$fiat_bank_swift: String,$fiat_routing_number: String,$fiat_reference: String,$fiat_notes: String,$fiat_beneficiary_name: String,$fiat_beneficiary_account_number: String,$fiat_beneficiary_country: String,$fiat_beneficiary_region: String,$fiat_beneficiary_city: String,$fiat_beneficiary_address_line_1: String,$fiat_beneficiary_address_line_2: String,$fiat_beneficiary_postal_code: String,$status: PaymentStatus,$approval_status: PaymentApprovalStatus,$approval_reason: String,$approved_by: String,$body_amount: Float,$fee_amount: Float,$record_account_transaction_id: String,$revert_account_transaction_id: String,$ip_address: String,$message: String,$error_message: String,$reference: String,$native_asset: String,$created_by: String,$manual_transaction_date: String,$fees_included: ToggleSwitch,$estimated_crypto_network_fee: Float,$crypto_estimation_details: String,$create_account_operations: Boolean!,$crypto_confirmations_received: Int,$version: Float,$approved_at: String,$created_at: String,$updated_at: String) {
                    create_payment_manual(remote_txid:$remote_txid,user_id:$user_id,currency_id:$currency_id,amount:$amount,type:$type,psp_service_id:$psp_service_id,psp_event_bridge_event_id:$psp_event_bridge_event_id,crypto_transaction_id:$crypto_transaction_id,crypto_address:$crypto_address,crypto_address_tag_type:$crypto_address_tag_type,crypto_address_tag_value:$crypto_address_tag_value,crypto_address_reference:$crypto_address_reference,crypto_network:$crypto_network,crypto_source_address:$crypto_source_address,crypto_network_fee_preference:$crypto_network_fee_preference,crypto_network_fee_amount:$crypto_network_fee_amount,crypto_network_fee_currency:$crypto_network_fee_currency,fiat_transfer_type:$fiat_transfer_type,fiat_bank_name:$fiat_bank_name,fiat_bank_country:$fiat_bank_country,fiat_bank_region:$fiat_bank_region,fiat_bank_city:$fiat_bank_city,fiat_bank_address:$fiat_bank_address,fiat_bank_postal_code:$fiat_bank_postal_code,fiat_bank_bic:$fiat_bank_bic,fiat_bank_swift:$fiat_bank_swift,fiat_routing_number:$fiat_routing_number,fiat_reference:$fiat_reference,fiat_notes:$fiat_notes,fiat_beneficiary_name:$fiat_beneficiary_name,fiat_beneficiary_account_number:$fiat_beneficiary_account_number,fiat_beneficiary_country:$fiat_beneficiary_country,fiat_beneficiary_region:$fiat_beneficiary_region,fiat_beneficiary_city:$fiat_beneficiary_city,fiat_beneficiary_address_line_1:$fiat_beneficiary_address_line_1,fiat_beneficiary_address_line_2:$fiat_beneficiary_address_line_2,fiat_beneficiary_postal_code:$fiat_beneficiary_postal_code,status:$status,approval_status:$approval_status,approval_reason:$approval_reason,approved_by:$approved_by,body_amount:$body_amount,fee_amount:$fee_amount,record_account_transaction_id:$record_account_transaction_id,revert_account_transaction_id:$revert_account_transaction_id,ip_address:$ip_address,message:$message,error_message:$error_message,reference:$reference,native_asset:$native_asset,created_by:$created_by,manual_transaction_date:$manual_transaction_date,fees_included:$fees_included,estimated_crypto_network_fee:$estimated_crypto_network_fee,crypto_estimation_details:$crypto_estimation_details,create_account_operations:$create_account_operations,crypto_confirmations_received:$crypto_confirmations_received,version:$version,approved_at:$approved_at,created_at:$created_at,updated_at:$updated_at)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_payment_manual',
        );
    }

    async create_conversion_order({
        args,
        fields,
        headers,
    }: {
        args: CreateConversionOrderArgs;
        fields: (keyof Conversion | Partial<Record<keyof Conversion, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Conversion> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($user_id: String,$conversion_quote_id: String!,$reference: String,$source_currency_amount: Float,$target_currency_amount: Float,$return_on_complete: Boolean) {
                    create_conversion_order(user_id:$user_id,conversion_quote_id:$conversion_quote_id,reference:$reference,source_currency_amount:$source_currency_amount,target_currency_amount:$target_currency_amount,return_on_complete:$return_on_complete)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_conversion_order',
        );
    }

    async create_conversion_quote({
        args,
        fields,
        headers,
    }: {
        args: CreateConversionQuoteArgs;
        fields: (keyof CreateConversionQuoteResult | Partial<Record<keyof CreateConversionQuoteResult, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<CreateConversionQuoteResult> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($user_id: String,$source_currency_id: String!,$target_currency_id: String!,$source_currency_amount: Float,$target_currency_amount: Float,$fees_in_price: Boolean,$reference: String,$ttl: Int,$dry_run: ToggleSwitch) {
                    create_conversion_quote(user_id:$user_id,source_currency_id:$source_currency_id,target_currency_id:$target_currency_id,source_currency_amount:$source_currency_amount,target_currency_amount:$target_currency_amount,fees_in_price:$fees_in_price,reference:$reference,ttl:$ttl,dry_run:$dry_run)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_conversion_quote',
        );
    }

    async update_user_fee_group({
        args,
        headers,
    }: {
        args: UpdateUserFeeGroupArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($user_id: String!, $fee_group_id: String!, $reason: String) {
                    update_user_fee_group(user_id: $user_id, fee_group_id: $fee_group_id, reason: $reason)
                }
            `,
            args || {},
            headers,
            'update_user_fee_group',
        );
    }

    async update_user_limit_group({
        args,
        headers,
    }: {
        args: UpdateUserLimitGroupArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($user_id: String!, $limit_group_id: String!, $reason: String) {
                    update_user_limit_group(user_id: $user_id, limit_group_id: $limit_group_id, reason: $reason)
                }
            `,
            args || {},
            headers,
            'update_user_limit_group',
        );
    }

    async update_user_kyc({args, headers}: {args: UpdateUserKycArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $user_id: String!
                    $kyc_level: String
                    $kyc_status: UserKycStatus
                    $kyc_message: String
                    $kyc_type: KycType
                ) {
                    update_user_kyc(
                        user_id: $user_id
                        kyc_level: $kyc_level
                        kyc_status: $kyc_status
                        kyc_message: $kyc_message
                        kyc_type: $kyc_type
                    )
                }
            `,
            args || {},
            headers,
            'update_user_kyc',
        );
    }

    async create_user_mfa_secret({
        fields,
        headers,
    }: {
        fields: (keyof CreateUserMfaSecretResult | Partial<Record<keyof CreateUserMfaSecretResult, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<CreateUserMfaSecretResult> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation {
                    create_user_mfa_secret
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            {},
            headers,
            'create_user_mfa_secret',
        );
    }

    async update_user_mfa_status({
        args,
        headers,
    }: {
        args: UpdateUserMfaStatusArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($status: ToggleSwitch!, $secret: String, $token: String!) {
                    update_user_mfa_status(status: $status, secret: $secret, token: $token)
                }
            `,
            args || {},
            headers,
            'update_user_mfa_status',
        );
    }

    async delete_user({headers}: {headers?: HeadersInit} = {}): Promise<string> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation {
                    delete_user
                }
            `,
            {},
            headers,
            'delete_user',
        );
    }

    async verify_user_mfa_token({
        args,
        headers,
    }: {
        args: VerifyUserMfaTokenArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($token: String!, $user_id: String) {
                    verify_user_mfa_token(token: $token, user_id: $user_id)
                }
            `,
            args || {},
            headers,
            'verify_user_mfa_token',
        );
    }

    async add_push_token({args, headers}: {args?: AddPushTokenArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($platform: Platform, $token: String) {
                    add_push_token(platform: $platform, token: $token)
                }
            `,
            args || {},
            headers,
            'add_push_token',
        );
    }

    async clear_push_tokens({headers}: {headers?: HeadersInit} = {}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation {
                    clear_push_tokens
                }
            `,
            {},
            headers,
            'clear_push_tokens',
        );
    }

    async update_user({
        args,
        fields,
        headers,
    }: {
        args: UpdateUserArgs;
        fields: (keyof User | Partial<Record<keyof User, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<User> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($parent_user_id: String,$username: String,$email: String,$mobile_nr: String,$language: String,$timezone: String,$primary_market_currency: String,$is_active: ToggleSwitch,$first_name: String,$last_name: String,$address_country: String,$address_state: String,$address_city: String,$address_line_1: String,$address_line_2: String,$address_zip: String,$date_of_birth: String,$mfa_for_withdraw: ToggleSwitch,$tax_id: String,$company_registration_nr: String,$company_name: String,$company_position: String,$updated_at: String,$nationality: String,$crypto_pay: ToggleSwitch,$kyc_type: KycType,$unique_id: String,$user_id: String,$favorite_instruments: String!,$notifications_settings: NotificationTrigger!,$mfa_token: String,$mfa_status: ToggleSwitch) {
                    update_user(parent_user_id:$parent_user_id,username:$username,email:$email,mobile_nr:$mobile_nr,language:$language,timezone:$timezone,primary_market_currency:$primary_market_currency,is_active:$is_active,first_name:$first_name,last_name:$last_name,address_country:$address_country,address_state:$address_state,address_city:$address_city,address_line_1:$address_line_1,address_line_2:$address_line_2,address_zip:$address_zip,date_of_birth:$date_of_birth,mfa_for_withdraw:$mfa_for_withdraw,tax_id:$tax_id,company_registration_nr:$company_registration_nr,company_name:$company_name,company_position:$company_position,updated_at:$updated_at,nationality:$nationality,crypto_pay:$crypto_pay,kyc_type:$kyc_type,unique_id:$unique_id,user_id:$user_id,favorite_instruments:$favorite_instruments,notifications_settings:$notifications_settings,mfa_token:$mfa_token,mfa_status:$mfa_status)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'update_user',
        );
    }

    async create_user({
        args,
        fields,
        headers,
    }: {
        args: CreateUserArgs;
        fields: (keyof User | Partial<Record<keyof User, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<User> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($user_id: String,$parent_user_id: String,$email: String,$mobile_nr: String,$language: String,$timezone: String,$primary_market_currency: String,$is_active: ToggleSwitch,$first_name: String,$last_name: String,$address_country: String,$address_state: String,$address_city: String,$address_line_1: String,$address_line_2: String,$address_zip: String,$date_of_birth: String,$fee_group_id: String,$limit_group_id: String,$kyc_level: String,$kyc_status: UserKycStatus,$kyc_message: String,$affiliate_code: String,$crypto_pay: ToggleSwitch,$kyc_type: KycType,$username: String!,$cognito_registration: ToggleSwitch,$cognito_email: ToggleSwitch) {
                    create_user(user_id:$user_id,parent_user_id:$parent_user_id,email:$email,mobile_nr:$mobile_nr,language:$language,timezone:$timezone,primary_market_currency:$primary_market_currency,is_active:$is_active,first_name:$first_name,last_name:$last_name,address_country:$address_country,address_state:$address_state,address_city:$address_city,address_line_1:$address_line_1,address_line_2:$address_line_2,address_zip:$address_zip,date_of_birth:$date_of_birth,fee_group_id:$fee_group_id,limit_group_id:$limit_group_id,kyc_level:$kyc_level,kyc_status:$kyc_status,kyc_message:$kyc_message,affiliate_code:$affiliate_code,crypto_pay:$crypto_pay,kyc_type:$kyc_type,username:$username,cognito_registration:$cognito_registration,cognito_email:$cognito_email)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_user',
        );
    }

    async create_account_transaction({
        fields,
        headers,
    }: {
        fields: (keyof CreateAccountTransactionResult | Partial<Record<keyof CreateAccountTransactionResult, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<CreateAccountTransactionResult> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation {
                    create_account_transaction
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            {},
            headers,
            'create_account_transaction',
        );
    }

    async create_limit_group({
        args,
        fields,
        headers,
    }: {
        args: CreateLimitGroupArgs;
        fields: (keyof LimitGroup | Partial<Record<keyof LimitGroup, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<LimitGroup> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($name: String,$description: String,$kyc_status: UserKycStatus,$limit_group_id: String,$disabled_currencies: String!,$disabled_instruments: String!) {
                    create_limit_group(name:$name,description:$description,kyc_status:$kyc_status,limit_group_id:$limit_group_id,disabled_currencies:$disabled_currencies,disabled_instruments:$disabled_instruments)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_limit_group',
        );
    }

    async update_limit_group({args, headers}: {args: UpdateLimitGroupArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $name: String
                    $description: String
                    $kyc_status: UserKycStatus
                    $limit_group_id: String!
                    $disabled_currencies: String!
                    $disabled_instruments: String!
                ) {
                    update_limit_group(
                        name: $name
                        description: $description
                        kyc_status: $kyc_status
                        limit_group_id: $limit_group_id
                        disabled_currencies: $disabled_currencies
                        disabled_instruments: $disabled_instruments
                    )
                }
            `,
            args || {},
            headers,
            'update_limit_group',
        );
    }

    async delete_limit_group({args, headers}: {args: DeleteLimitGroupArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($limit_group_id: String!) {
                    delete_limit_group(limit_group_id: $limit_group_id)
                }
            `,
            args || {},
            headers,
            'delete_limit_group',
        );
    }

    async create_fee_group({
        args,
        fields,
        headers,
    }: {
        args?: CreateFeeGroupArgs;
        fields: (keyof FeeGroup | Partial<Record<keyof FeeGroup, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<FeeGroup> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($name: String,$description: String,$kyc_status: UserKycStatus,$beneficiary_user_id: String) {
                    create_fee_group(name:$name,description:$description,kyc_status:$kyc_status,beneficiary_user_id:$beneficiary_user_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_fee_group',
        );
    }

    async update_fee_group({args, headers}: {args: UpdateFeeGroupArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $name: String
                    $description: String
                    $beneficiary_user_id: String
                    $kyc_status: UserKycStatus
                    $fee_group_id: String!
                ) {
                    update_fee_group(
                        name: $name
                        description: $description
                        beneficiary_user_id: $beneficiary_user_id
                        kyc_status: $kyc_status
                        fee_group_id: $fee_group_id
                    )
                }
            `,
            args || {},
            headers,
            'update_fee_group',
        );
    }

    async delete_fee_group({args, headers}: {args: DeleteFeeGroupArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($fee_group_id: String!) {
                    delete_fee_group(fee_group_id: $fee_group_id)
                }
            `,
            args || {},
            headers,
            'delete_fee_group',
        );
    }

    async estimate_payment_fee({
        args,
        headers,
    }: {
        args: EstimatePaymentFeeArgs;
        headers?: HeadersInit;
    }): Promise<number> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $user_id: String
                    $currency_id: String!
                    $type: PaymentType!
                    $amount: Float!
                    $crypto_network: String
                    $psp_service_id: String
                    $crypto_network_fee_preference: CryptoNetworkFeePreference
                    $crypto_address: String
                    $crypto_address_tag_type: CryptoAddressTagType
                    $crypto_address_tag_value: String
                ) {
                    estimate_payment_fee(
                        user_id: $user_id
                        currency_id: $currency_id
                        type: $type
                        amount: $amount
                        crypto_network: $crypto_network
                        psp_service_id: $psp_service_id
                        crypto_network_fee_preference: $crypto_network_fee_preference
                        crypto_address: $crypto_address
                        crypto_address_tag_type: $crypto_address_tag_type
                        crypto_address_tag_value: $crypto_address_tag_value
                    )
                }
            `,
            args || {},
            headers,
            'estimate_payment_fee',
        );
    }

    async create_payment_fee({
        args,
        fields,
        headers,
    }: {
        args: CreatePaymentFeeArgs;
        fields: (keyof PaymentFee | Partial<Record<keyof PaymentFee, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<PaymentFee> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($currency_id: String!,$fee_group_id: String!,$withdrawal_progressive_fee: Float,$withdrawal_flat_fee: Float,$deposit_progressive_fee: Float,$deposit_flat_fee: Float) {
                    create_payment_fee(currency_id:$currency_id,fee_group_id:$fee_group_id,withdrawal_progressive_fee:$withdrawal_progressive_fee,withdrawal_flat_fee:$withdrawal_flat_fee,deposit_progressive_fee:$deposit_progressive_fee,deposit_flat_fee:$deposit_flat_fee)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_payment_fee',
        );
    }

    async delete_payment_fee({args, headers}: {args: DeletePaymentFeeArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($currency_id: String!, $fee_group_id: String!) {
                    delete_payment_fee(currency_id: $currency_id, fee_group_id: $fee_group_id)
                }
            `,
            args || {},
            headers,
            'delete_payment_fee',
        );
    }

    async update_payment_fee({args, headers}: {args: UpdatePaymentFeeArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $currency_id: String!
                    $fee_group_id: String!
                    $withdrawal_progressive_fee: Float
                    $withdrawal_flat_fee: Float
                    $deposit_progressive_fee: Float
                    $deposit_flat_fee: Float
                ) {
                    update_payment_fee(
                        currency_id: $currency_id
                        fee_group_id: $fee_group_id
                        withdrawal_progressive_fee: $withdrawal_progressive_fee
                        withdrawal_flat_fee: $withdrawal_flat_fee
                        deposit_progressive_fee: $deposit_progressive_fee
                        deposit_flat_fee: $deposit_flat_fee
                    )
                }
            `,
            args || {},
            headers,
            'update_payment_fee',
        );
    }

    async create_trading_fee({
        args,
        fields,
        headers,
    }: {
        args: CreateTradingFeeArgs;
        fields: (keyof TradingFee | Partial<Record<keyof TradingFee, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<TradingFee> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($instrument_id: String!,$fee_group_id: String!,$maker_progressive: Float!,$taker_progressive: Float!,$maker_flat: Float!,$taker_flat: Float!) {
                    create_trading_fee(instrument_id:$instrument_id,fee_group_id:$fee_group_id,maker_progressive:$maker_progressive,taker_progressive:$taker_progressive,maker_flat:$maker_flat,taker_flat:$taker_flat)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_trading_fee',
        );
    }

    async update_trading_fee({args, headers}: {args: UpdateTradingFeeArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $maker_progressive: Float
                    $taker_progressive: Float
                    $maker_flat: Float
                    $taker_flat: Float
                    $instrument_id: String!
                    $fee_group_id: String!
                ) {
                    update_trading_fee(
                        maker_progressive: $maker_progressive
                        taker_progressive: $taker_progressive
                        maker_flat: $maker_flat
                        taker_flat: $taker_flat
                        instrument_id: $instrument_id
                        fee_group_id: $fee_group_id
                    )
                }
            `,
            args || {},
            headers,
            'update_trading_fee',
        );
    }

    async delete_trading_fee({args, headers}: {args: DeleteTradingFeeArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($instrument_id: String!, $fee_group_id: String!) {
                    delete_trading_fee(instrument_id: $instrument_id, fee_group_id: $fee_group_id)
                }
            `,
            args || {},
            headers,
            'delete_trading_fee',
        );
    }

    async create_payment_session({
        args,
        headers,
    }: {
        args: CreatePaymentSessionArgs;
        headers?: HeadersInit;
    }): Promise<string> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($payment_route_id: String!, $payment_type: PaymentType!, $mfa_token: String) {
                    create_payment_session(
                        payment_route_id: $payment_route_id
                        payment_type: $payment_type
                        mfa_token: $mfa_token
                    )
                }
            `,
            args || {},
            headers,
            'create_payment_session',
        );
    }

    async create_payment_route({
        args,
        fields,
        headers,
    }: {
        args: CreatePaymentRouteArgs;
        fields: (keyof PaymentRoute | Partial<Record<keyof PaymentRoute, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<PaymentRoute> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($currency_id: String!,$psp_service_id: String!,$crypto_network: String,$crypto_network_name: String,$crypto_address_tag_type: String,$is_active: ToggleSwitch!,$fiat_transfer_type: String,$fiat_transfer_type_name: String,$fiat_iframe_deposit_url: String,$fiat_iframe_withdrawal_url: String,$is_development: ToggleSwitch,$extend_network_fee: ToggleSwitch,$network_fee_currency_id: String) {
                    create_payment_route(currency_id:$currency_id,psp_service_id:$psp_service_id,crypto_network:$crypto_network,crypto_network_name:$crypto_network_name,crypto_address_tag_type:$crypto_address_tag_type,is_active:$is_active,fiat_transfer_type:$fiat_transfer_type,fiat_transfer_type_name:$fiat_transfer_type_name,fiat_iframe_deposit_url:$fiat_iframe_deposit_url,fiat_iframe_withdrawal_url:$fiat_iframe_withdrawal_url,is_development:$is_development,extend_network_fee:$extend_network_fee,network_fee_currency_id:$network_fee_currency_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_payment_route',
        );
    }

    async delete_payment_route({
        args,
        headers,
    }: {
        args: DeletePaymentRouteArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($payment_route_id: String!) {
                    delete_payment_route(payment_route_id: $payment_route_id)
                }
            `,
            args || {},
            headers,
            'delete_payment_route',
        );
    }

    async update_payment_route({
        args,
        headers,
    }: {
        args: UpdatePaymentRouteArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $currency_id: String
                    $psp_service_id: String
                    $fiat_transfer_type: String
                    $fiat_transfer_type_name: String
                    $crypto_network: String
                    $crypto_network_name: String
                    $crypto_address_tag_type: String
                    $fiat_iframe_deposit_url: String
                    $fiat_iframe_withdrawal_url: String
                    $is_active: ToggleSwitch
                    $extend_network_fee: ToggleSwitch
                    $network_fee_currency_id: String
                    $is_development: ToggleSwitch
                    $payment_route_id: String!
                ) {
                    update_payment_route(
                        currency_id: $currency_id
                        psp_service_id: $psp_service_id
                        fiat_transfer_type: $fiat_transfer_type
                        fiat_transfer_type_name: $fiat_transfer_type_name
                        crypto_network: $crypto_network
                        crypto_network_name: $crypto_network_name
                        crypto_address_tag_type: $crypto_address_tag_type
                        fiat_iframe_deposit_url: $fiat_iframe_deposit_url
                        fiat_iframe_withdrawal_url: $fiat_iframe_withdrawal_url
                        is_active: $is_active
                        extend_network_fee: $extend_network_fee
                        network_fee_currency_id: $network_fee_currency_id
                        is_development: $is_development
                        payment_route_id: $payment_route_id
                    )
                }
            `,
            args || {},
            headers,
            'update_payment_route',
        );
    }

    async create_payment_limit({
        args,
        fields,
        headers,
    }: {
        args: CreatePaymentLimitArgs;
        fields: (keyof PaymentLimit | Partial<Record<keyof PaymentLimit, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<PaymentLimit> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($limit_group_id: String!,$currency_id: String!,$deposit_enabled: ToggleSwitch!,$deposit_min_amount: Float!,$deposit_daily_limit: Float,$deposit_weekly_limit: Float,$deposit_monthly_limit: Float,$deposit_auto_approval_amount: Float!,$withdrawal_enabled: ToggleSwitch!,$withdrawal_min_amount: Float!,$withdrawal_daily_limit: Float,$withdrawal_weekly_limit: Float,$withdrawal_monthly_limit: Float,$withdrawal_auto_approval_amount: Float!) {
                    create_payment_limit(limit_group_id:$limit_group_id,currency_id:$currency_id,deposit_enabled:$deposit_enabled,deposit_min_amount:$deposit_min_amount,deposit_daily_limit:$deposit_daily_limit,deposit_weekly_limit:$deposit_weekly_limit,deposit_monthly_limit:$deposit_monthly_limit,deposit_auto_approval_amount:$deposit_auto_approval_amount,withdrawal_enabled:$withdrawal_enabled,withdrawal_min_amount:$withdrawal_min_amount,withdrawal_daily_limit:$withdrawal_daily_limit,withdrawal_weekly_limit:$withdrawal_weekly_limit,withdrawal_monthly_limit:$withdrawal_monthly_limit,withdrawal_auto_approval_amount:$withdrawal_auto_approval_amount)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_payment_limit',
        );
    }

    async update_payment_limit({
        args,
        headers,
    }: {
        args: UpdatePaymentLimitArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $limit_group_id: String!
                    $currency_id: String!
                    $deposit_enabled: ToggleSwitch
                    $deposit_min_amount: Float
                    $deposit_daily_limit: Float
                    $deposit_weekly_limit: Float
                    $deposit_monthly_limit: Float
                    $deposit_auto_approval_amount: Float
                    $withdrawal_enabled: ToggleSwitch
                    $withdrawal_min_amount: Float
                    $withdrawal_daily_limit: Float
                    $withdrawal_weekly_limit: Float
                    $withdrawal_monthly_limit: Float
                    $withdrawal_auto_approval_amount: Float
                ) {
                    update_payment_limit(
                        limit_group_id: $limit_group_id
                        currency_id: $currency_id
                        deposit_enabled: $deposit_enabled
                        deposit_min_amount: $deposit_min_amount
                        deposit_daily_limit: $deposit_daily_limit
                        deposit_weekly_limit: $deposit_weekly_limit
                        deposit_monthly_limit: $deposit_monthly_limit
                        deposit_auto_approval_amount: $deposit_auto_approval_amount
                        withdrawal_enabled: $withdrawal_enabled
                        withdrawal_min_amount: $withdrawal_min_amount
                        withdrawal_daily_limit: $withdrawal_daily_limit
                        withdrawal_weekly_limit: $withdrawal_weekly_limit
                        withdrawal_monthly_limit: $withdrawal_monthly_limit
                        withdrawal_auto_approval_amount: $withdrawal_auto_approval_amount
                    )
                }
            `,
            args || {},
            headers,
            'update_payment_limit',
        );
    }

    async delete_payment_limit({
        args,
        headers,
    }: {
        args: DeletePaymentLimitArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($limit_group_id: String!, $currency_id: String!) {
                    delete_payment_limit(limit_group_id: $limit_group_id, currency_id: $currency_id)
                }
            `,
            args || {},
            headers,
            'delete_payment_limit',
        );
    }

    async create_api_key({
        args,
        fields,
        headers,
    }: {
        args: CreateApiKeyArgs;
        fields: (keyof CreateApiKeyResult | Partial<Record<keyof CreateApiKeyResult, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<CreateApiKeyResult> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($name: String,$expires_at: String!,$is_active: ToggleSwitch!,$user_id: String,$ip_address: String!,$permissions: Permission!) {
                    create_api_key(name:$name,expires_at:$expires_at,is_active:$is_active,user_id:$user_id,ip_address:$ip_address,permissions:$permissions)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_api_key',
        );
    }

    async update_api_key({args, headers}: {args: UpdateApiKeyArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $name: String
                    $expires_at: String
                    $is_active: ToggleSwitch
                    $user_id: String
                    $api_key_id: String!
                    $ip_address: String!
                    $permissions: Permission!
                ) {
                    update_api_key(
                        name: $name
                        expires_at: $expires_at
                        is_active: $is_active
                        user_id: $user_id
                        api_key_id: $api_key_id
                        ip_address: $ip_address
                        permissions: $permissions
                    )
                }
            `,
            args || {},
            headers,
            'update_api_key',
        );
    }

    async delete_api_key({args, headers}: {args: DeleteApiKeyArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($api_key_id: String!, $user_id: String) {
                    delete_api_key(api_key_id: $api_key_id, user_id: $user_id)
                }
            `,
            args || {},
            headers,
            'delete_api_key',
        );
    }

    async create_cognito_pool({
        args,
        fields,
        headers,
    }: {
        args: CreateCognitoPoolArgs;
        fields: (keyof CognitoPool | Partial<Record<keyof CognitoPool, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<CognitoPool> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($cognito_pool_id: String!,$role: Role!,$jwks: String!,$name: String) {
                    create_cognito_pool(cognito_pool_id:$cognito_pool_id,role:$role,jwks:$jwks,name:$name)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_cognito_pool',
        );
    }

    async update_cognito_pool({args, headers}: {args: UpdateCognitoPoolArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $name: String
                    $role: Role
                    $jwks: String
                    $is_active: ToggleSwitch
                    $cognito_pool_id: String!
                ) {
                    update_cognito_pool(
                        name: $name
                        role: $role
                        jwks: $jwks
                        is_active: $is_active
                        cognito_pool_id: $cognito_pool_id
                    )
                }
            `,
            args || {},
            headers,
            'update_cognito_pool',
        );
    }

    async delete_cognito_pool({args, headers}: {args: DeleteCognitoPoolArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($cognito_pool_id: String, $multiple_pool_ids: String!) {
                    delete_cognito_pool(cognito_pool_id: $cognito_pool_id, multiple_pool_ids: $multiple_pool_ids)
                }
            `,
            args || {},
            headers,
            'delete_cognito_pool',
        );
    }

    async create_instrument_strategy({
        args,
        fields,
        headers,
    }: {
        args: CreateInstrumentStrategyArgs;
        fields: (keyof InstrumentStrategy | Partial<Record<keyof InstrumentStrategy, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<InstrumentStrategy> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($hedging_adapter_id: String!,$instrument_id: String!,$remote_instrument_id: String,$loop_interval: Int!,$active_layers_count: Int!,$layer_discount_factor: Float!,$markup_ask: Float!,$markup_bid: Float!,$order_min_quantity: Float!,$order_max_quantity: Float!,$order_ttl_ms: Int!,$hedge_quantity_trigger_buy: Float!,$hedge_quantity_trigger_sell: Float!,$hedge_quantity_increment: Float!,$conversions_balance: Int,$hedging_enabled: ToggleSwitch,$hedging_order_type: OrderType,$hedging_order_time_in_force: OrderTimeInForce,$hedging_order_price: InstrumentStrategyHedgingOrderPrice,$hedging_order_ttl_ms: Int,$instruments_settings_sync_enabled: ToggleSwitch,$is_active: ToggleSwitch!,$version: Int) {
                    create_instrument_strategy(hedging_adapter_id:$hedging_adapter_id,instrument_id:$instrument_id,remote_instrument_id:$remote_instrument_id,loop_interval:$loop_interval,active_layers_count:$active_layers_count,layer_discount_factor:$layer_discount_factor,markup_ask:$markup_ask,markup_bid:$markup_bid,order_min_quantity:$order_min_quantity,order_max_quantity:$order_max_quantity,order_ttl_ms:$order_ttl_ms,hedge_quantity_trigger_buy:$hedge_quantity_trigger_buy,hedge_quantity_trigger_sell:$hedge_quantity_trigger_sell,hedge_quantity_increment:$hedge_quantity_increment,conversions_balance:$conversions_balance,hedging_enabled:$hedging_enabled,hedging_order_type:$hedging_order_type,hedging_order_time_in_force:$hedging_order_time_in_force,hedging_order_price:$hedging_order_price,hedging_order_ttl_ms:$hedging_order_ttl_ms,instruments_settings_sync_enabled:$instruments_settings_sync_enabled,is_active:$is_active,version:$version)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_instrument_strategy',
        );
    }

    async update_instrument_strategy({
        args,
        headers,
    }: {
        args: UpdateInstrumentStrategyArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $hedging_adapter_id: String
                    $instrument_id: String
                    $remote_instrument_id: String
                    $loop_interval: Int
                    $active_layers_count: Int
                    $layer_discount_factor: Float
                    $markup_ask: Float
                    $markup_bid: Float
                    $order_min_quantity: Float
                    $order_max_quantity: Float
                    $order_ttl_ms: Int
                    $hedge_quantity_trigger_buy: Float
                    $hedge_quantity_trigger_sell: Float
                    $hedge_quantity_increment: Float
                    $hedging_enabled: ToggleSwitch
                    $hedging_order_type: OrderType
                    $hedging_order_price: InstrumentStrategyHedgingOrderPrice
                    $hedging_order_ttl_ms: Int
                    $instruments_settings_sync_enabled: ToggleSwitch
                    $meta: String
                    $is_active: ToggleSwitch
                    $instrument_strategy_id: String!
                ) {
                    update_instrument_strategy(
                        hedging_adapter_id: $hedging_adapter_id
                        instrument_id: $instrument_id
                        remote_instrument_id: $remote_instrument_id
                        loop_interval: $loop_interval
                        active_layers_count: $active_layers_count
                        layer_discount_factor: $layer_discount_factor
                        markup_ask: $markup_ask
                        markup_bid: $markup_bid
                        order_min_quantity: $order_min_quantity
                        order_max_quantity: $order_max_quantity
                        order_ttl_ms: $order_ttl_ms
                        hedge_quantity_trigger_buy: $hedge_quantity_trigger_buy
                        hedge_quantity_trigger_sell: $hedge_quantity_trigger_sell
                        hedge_quantity_increment: $hedge_quantity_increment
                        hedging_enabled: $hedging_enabled
                        hedging_order_type: $hedging_order_type
                        hedging_order_price: $hedging_order_price
                        hedging_order_ttl_ms: $hedging_order_ttl_ms
                        instruments_settings_sync_enabled: $instruments_settings_sync_enabled
                        meta: $meta
                        is_active: $is_active
                        instrument_strategy_id: $instrument_strategy_id
                    )
                }
            `,
            args || {},
            headers,
            'update_instrument_strategy',
        );
    }

    async delete_instrument_strategy({
        args,
        headers,
    }: {
        args: DeleteInstrumentStrategyArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($hedging_adapter_id: String!, $instrument_id: String!) {
                    delete_instrument_strategy(hedging_adapter_id: $hedging_adapter_id, instrument_id: $instrument_id)
                }
            `,
            args || {},
            headers,
            'delete_instrument_strategy',
        );
    }

    async update_system_setting({
        args,
        headers,
    }: {
        args: UpdateSystemSettingArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($name: String!, $value: String) {
                    update_system_setting(name: $name, value: $value)
                }
            `,
            args || {},
            headers,
            'update_system_setting',
        );
    }

    async update_system_settings({headers}: {headers?: HeadersInit} = {}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation {
                    update_system_settings
                }
            `,
            {},
            headers,
            'update_system_settings',
        );
    }

    async update_maintenance_mode({
        args,
        headers,
    }: {
        args: UpdateMaintenanceModeArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($maintenance_mode: ToggleSwitch!, $maintenance_message: String!) {
                    update_maintenance_mode(
                        maintenance_mode: $maintenance_mode
                        maintenance_message: $maintenance_message
                    )
                }
            `,
            args || {},
            headers,
            'update_maintenance_mode',
        );
    }

    async update_notifications_settings({
        args,
        fields,
        headers,
    }: {
        args: UpdateNotificationsSettingsArgs;
        fields: (keyof NotificationOptions | Partial<Record<keyof NotificationOptions, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<NotificationOptions> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($client: NotificationTrigger!,$push: NotificationTrigger!,$email: NotificationTrigger!,$sms: NotificationTrigger!) {
                    update_notifications_settings(client:$client,push:$push,email:$email,sms:$sms)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'update_notifications_settings',
        );
    }

    async update_delayed_mutations({
        args,
        headers,
    }: {
        args: UpdateDelayedMutationsArgs;
        headers?: HeadersInit;
    }): Promise<string[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($mutations: String!) {
                    update_delayed_mutations(mutations: $mutations)
                }
            `,
            args || {},
            headers,
            'update_delayed_mutations',
        );
    }

    async update_geo_restrictions({
        fields,
        headers,
    }: {
        fields: (keyof GeoRestrictions | Partial<Record<keyof GeoRestrictions, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<GeoRestrictions> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation {
                    update_geo_restrictions
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            {},
            headers,
            'update_geo_restrictions',
        );
    }

    async create_super_admins({args, headers}: {args: CreateSuperAdminsArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($emails: String!) {
                    create_super_admins(emails: $emails)
                }
            `,
            args || {},
            headers,
            'create_super_admins',
        );
    }

    async delete_super_admins({args, headers}: {args: DeleteSuperAdminsArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($emails: String!) {
                    delete_super_admins(emails: $emails)
                }
            `,
            args || {},
            headers,
            'delete_super_admins',
        );
    }

    async create_readonly_admins({
        args,
        headers,
    }: {
        args: CreateReadonlyAdminsArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($emails: String!) {
                    create_readonly_admins(emails: $emails)
                }
            `,
            args || {},
            headers,
            'create_readonly_admins',
        );
    }

    async delete_readonly_admins({
        args,
        headers,
    }: {
        args: DeleteReadonlyAdminsArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($emails: String!) {
                    delete_readonly_admins(emails: $emails)
                }
            `,
            args || {},
            headers,
            'delete_readonly_admins',
        );
    }

    async create_permission_share({
        args,
        fields,
        headers,
    }: {
        args: CreatePermissionShareArgs;
        fields: (keyof PermissionShare | Partial<Record<keyof PermissionShare, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<PermissionShare> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($user_id: String!,$role_id: Role!,$subject: String!) {
                    create_permission_share(user_id:$user_id,role_id:$role_id,subject:$subject)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_permission_share',
        );
    }

    async delete_permission_share({
        args,
        headers,
    }: {
        args: DeletePermissionShareArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($user_id: String!, $role_id: Role!, $subject: String!) {
                    delete_permission_share(user_id: $user_id, role_id: $role_id, subject: $subject)
                }
            `,
            args || {},
            headers,
            'delete_permission_share',
        );
    }

    async create_kyc_manual_request({
        args,
        headers,
    }: {
        args?: CreateKycManualRequestArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $mobile_nr: String
                    $first_name: String
                    $last_name: String
                    $address_country: String
                    $address_state: String
                    $address_city: String
                    $address_line_1: String
                    $address_line_2: String
                    $address_zip: String
                    $date_of_birth: String
                    $tax_id: String
                    $account_opening_purpose: String
                    $company_registration_nr: String
                    $company_name: String
                    $company_position: String
                    $nationality: String
                    $unique_id: String
                    $user_id: String
                ) {
                    create_kyc_manual_request(
                        mobile_nr: $mobile_nr
                        first_name: $first_name
                        last_name: $last_name
                        address_country: $address_country
                        address_state: $address_state
                        address_city: $address_city
                        address_line_1: $address_line_1
                        address_line_2: $address_line_2
                        address_zip: $address_zip
                        date_of_birth: $date_of_birth
                        tax_id: $tax_id
                        account_opening_purpose: $account_opening_purpose
                        company_registration_nr: $company_registration_nr
                        company_name: $company_name
                        company_position: $company_position
                        nationality: $nationality
                        unique_id: $unique_id
                        user_id: $user_id
                    )
                }
            `,
            args || {},
            headers,
            'create_kyc_manual_request',
        );
    }

    async create_kyc_sum_and_substance_token({
        args,
        headers,
    }: {
        args: CreateKycSumAndSubstanceTokenArgs;
        headers?: HeadersInit;
    }): Promise<string> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($level_name: String!, $user_id: String) {
                    create_kyc_sum_and_substance_token(level_name: $level_name, user_id: $user_id)
                }
            `,
            args || {},
            headers,
            'create_kyc_sum_and_substance_token',
        );
    }

    async create_kyc_session({args, headers}: {args: CreateKycSessionArgs; headers?: HeadersInit}): Promise<string> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($kyc_service_id: String!, $user_id: String) {
                    create_kyc_session(kyc_service_id: $kyc_service_id, user_id: $user_id)
                }
            `,
            args || {},
            headers,
            'create_kyc_session',
        );
    }

    async create_kyc_prime_trust_token({
        args,
        headers,
    }: {
        args: CreateKycPrimeTrustTokenArgs;
        headers?: HeadersInit;
    }): Promise<string> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($is_company: Boolean!, $user_id: String) {
                    create_kyc_prime_trust_token(is_company: $is_company, user_id: $user_id)
                }
            `,
            args || {},
            headers,
            'create_kyc_prime_trust_token',
        );
    }

    async update_kyc_preference({
        args,
        fields,
        headers,
    }: {
        args?: UpdateKycPreferenceArgs;
        fields: (keyof KycPreference | Partial<Record<keyof KycPreference, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<KycPreference> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($provider: KycProvider,$provider_url: String,$type: KycType) {
                    update_kyc_preference(provider:$provider,provider_url:$provider_url,type:$type)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'update_kyc_preference',
        );
    }

    async create_webhook({
        args,
        fields,
        headers,
    }: {
        args: CreateWebhookArgs;
        fields: (keyof Webhook | Partial<Record<keyof Webhook, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Webhook> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($name: String!,$is_active: ToggleSwitch!,$user_id: String,$url: String!,$triggers: NotificationTrigger!) {
                    create_webhook(name:$name,is_active:$is_active,user_id:$user_id,url:$url,triggers:$triggers)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_webhook',
        );
    }

    async update_webhook({args, headers}: {args: UpdateWebhookArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $name: String
                    $is_active: ToggleSwitch
                    $webhook_id: String!
                    $url: String
                    $triggers: NotificationTrigger!
                ) {
                    update_webhook(
                        name: $name
                        is_active: $is_active
                        webhook_id: $webhook_id
                        url: $url
                        triggers: $triggers
                    )
                }
            `,
            args || {},
            headers,
            'update_webhook',
        );
    }

    async delete_webhook({args, headers}: {args: DeleteWebhookArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($webhook_id: String!) {
                    delete_webhook(webhook_id: $webhook_id)
                }
            `,
            args || {},
            headers,
            'delete_webhook',
        );
    }

    async create_hedging_adapter({
        args,
        fields,
        headers,
    }: {
        args: CreateHedgingAdapterArgs;
        fields: (keyof HedgingAdapter | Partial<Record<keyof HedgingAdapter, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<HedgingAdapter> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($hedging_adapter_id: String!,$service_url: String!,$service_api_key: String!,$broker_user_id: String!,$hedging_enabled: ToggleSwitch!,$hedging_order_type: OrderType,$hedging_order_ttl_ms: Int,$instruments_settings_sync_enabled: ToggleSwitch,$disable_instrument_on_hedging_error: ToggleSwitch!,$disable_strategy_hedging_on_error: ToggleSwitch!,$account_balances_sync_enabled: ToggleSwitch!,$hedging_error_attempts_threshold: Int,$hedging_error_attempts_count: Int,$create_broker_user_id: Boolean) {
                    create_hedging_adapter(hedging_adapter_id:$hedging_adapter_id,service_url:$service_url,service_api_key:$service_api_key,broker_user_id:$broker_user_id,hedging_enabled:$hedging_enabled,hedging_order_type:$hedging_order_type,hedging_order_ttl_ms:$hedging_order_ttl_ms,instruments_settings_sync_enabled:$instruments_settings_sync_enabled,disable_instrument_on_hedging_error:$disable_instrument_on_hedging_error,disable_strategy_hedging_on_error:$disable_strategy_hedging_on_error,account_balances_sync_enabled:$account_balances_sync_enabled,hedging_error_attempts_threshold:$hedging_error_attempts_threshold,hedging_error_attempts_count:$hedging_error_attempts_count,create_broker_user_id:$create_broker_user_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_hedging_adapter',
        );
    }

    async update_hedging_adapter({
        args,
        headers,
    }: {
        args: UpdateHedgingAdapterArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $service_url: String
                    $service_api_key: String
                    $broker_user_id: String
                    $hedging_enabled: ToggleSwitch
                    $hedging_order_type: OrderType
                    $instruments_settings_sync_enabled: ToggleSwitch
                    $disable_instrument_on_hedging_error: ToggleSwitch
                    $disable_strategy_hedging_on_error: ToggleSwitch
                    $account_balances_sync_enabled: ToggleSwitch
                    $hedging_error_attempts_threshold: Int
                    $hedging_error_attempts_count: Int
                    $hedging_adapter_id: String!
                    $create_broker_user_id: Boolean
                ) {
                    update_hedging_adapter(
                        service_url: $service_url
                        service_api_key: $service_api_key
                        broker_user_id: $broker_user_id
                        hedging_enabled: $hedging_enabled
                        hedging_order_type: $hedging_order_type
                        instruments_settings_sync_enabled: $instruments_settings_sync_enabled
                        disable_instrument_on_hedging_error: $disable_instrument_on_hedging_error
                        disable_strategy_hedging_on_error: $disable_strategy_hedging_on_error
                        account_balances_sync_enabled: $account_balances_sync_enabled
                        hedging_error_attempts_threshold: $hedging_error_attempts_threshold
                        hedging_error_attempts_count: $hedging_error_attempts_count
                        hedging_adapter_id: $hedging_adapter_id
                        create_broker_user_id: $create_broker_user_id
                    )
                }
            `,
            args || {},
            headers,
            'update_hedging_adapter',
        );
    }

    async delete_hedging_adapter({
        args,
        headers,
    }: {
        args: DeleteHedgingAdapterArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($hedging_adapter_id: String!) {
                    delete_hedging_adapter(hedging_adapter_id: $hedging_adapter_id)
                }
            `,
            args || {},
            headers,
            'delete_hedging_adapter',
        );
    }

    async create_trading_limit({
        args,
        fields,
        headers,
    }: {
        args: CreateTradingLimitArgs;
        fields: (keyof TradingLimit | Partial<Record<keyof TradingLimit, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<TradingLimit> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($limit_group_id: String!,$instrument_id: String!,$daily_limit: Float,$weekly_limit: Float,$monthly_limit: Float,$notion_currency: String) {
                    create_trading_limit(limit_group_id:$limit_group_id,instrument_id:$instrument_id,daily_limit:$daily_limit,weekly_limit:$weekly_limit,monthly_limit:$monthly_limit,notion_currency:$notion_currency)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'create_trading_limit',
        );
    }

    async update_trading_limit({
        args,
        headers,
    }: {
        args: UpdateTradingLimitArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation (
                    $limit_group_id: String!
                    $instrument_id: String!
                    $daily_limit: Float
                    $weekly_limit: Float
                    $monthly_limit: Float
                    $notion_currency: String
                ) {
                    update_trading_limit(
                        limit_group_id: $limit_group_id
                        instrument_id: $instrument_id
                        daily_limit: $daily_limit
                        weekly_limit: $weekly_limit
                        monthly_limit: $monthly_limit
                        notion_currency: $notion_currency
                    )
                }
            `,
            args || {},
            headers,
            'update_trading_limit',
        );
    }

    async delete_trading_limit({
        args,
        headers,
    }: {
        args: DeleteTradingLimitArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($limit_group_id: String!, $instrument_id: String!) {
                    delete_trading_limit(limit_group_id: $limit_group_id, instrument_id: $instrument_id)
                }
            `,
            args || {},
            headers,
            'delete_trading_limit',
        );
    }

    async send_push({args, headers}: {args: SendPushArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($title: String!, $message: String!, $body: String!) {
                    send_push(title: $title, message: $message, body: $body)
                }
            `,
            args || {},
            headers,
            'send_push',
        );
    }

    async update_delayed_request({
        args,
        fields,
        headers,
    }: {
        args?: UpdateDelayedRequestArgs;
        fields: (keyof DelayedRequest | Partial<Record<keyof DelayedRequest, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<DelayedRequest> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation($delayed_request_id: String,$approval_status: DelayedRequestStatus) {
                    update_delayed_request(delayed_request_id:$delayed_request_id,approval_status:$approval_status)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'update_delayed_request',
        );
    }

    async delete_delayed_request({
        args,
        headers,
    }: {
        args?: DeleteDelayedRequestArgs;
        headers?: HeadersInit;
    }): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($delayed_request_id: String) {
                    delete_delayed_request(delayed_request_id: $delayed_request_id)
                }
            `,
            args || {},
            headers,
            'delete_delayed_request',
        );
    }

    async send_test_email({args, headers}: {args: SendTestEmailArgs; headers?: HeadersInit}): Promise<boolean> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                mutation ($trigger: NotificationTrigger!, $to: String!) {
                    send_test_email(trigger: $trigger, to: $to)
                }
            `,
            args || {},
            headers,
            'send_test_email',
        );
    }

    async open_orders({
        args,
        fields,
        headers,
    }: {
        args: OpenOrdersArgs;
        fields: (keyof Order | Partial<Record<keyof Order[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Order[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($order_id: String,$client_order_id: String,$time_in_force: OrderTimeInForce,$side: OrderSide,$instrument_id: String,$message: String,$user_id: String,$search: String,$status: OrderStatus!) {
                    open_orders(order_id:$order_id,client_order_id:$client_order_id,time_in_force:$time_in_force,side:$side,instrument_id:$instrument_id,message:$message,user_id:$user_id,search:$search,status:$status)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'open_orders',
        );
    }

    async closed_orders({
        args,
        fields,
        headers,
    }: {
        args: ClosedOrdersArgs;
        fields: (keyof Order | Partial<Record<keyof Order[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Order[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($order_id: String,$client_order_id: String,$time_in_force: OrderTimeInForce,$side: OrderSide,$instrument_id: String,$message: String,$user_id: String,$search: String,$status: OrderStatus!) {
                    closed_orders(order_id:$order_id,client_order_id:$client_order_id,time_in_force:$time_in_force,side:$side,instrument_id:$instrument_id,message:$message,user_id:$user_id,search:$search,status:$status)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'closed_orders',
        );
    }

    async estimate_order({
        args,
        fields,
        headers,
    }: {
        args: EstimateOrderArgs;
        fields: (keyof EstimateOrderResult | Partial<Record<keyof EstimateOrderResult, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<EstimateOrderResult> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($user_id: String,$source_currency_id: String!,$source_currency_amount: Float,$target_currency_id: String!,$target_currency_amount: Float,$price: Float) {
                    estimate_order(user_id:$user_id,source_currency_id:$source_currency_id,source_currency_amount:$source_currency_amount,target_currency_id:$target_currency_id,target_currency_amount:$target_currency_amount,price:$price)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'estimate_order',
        );
    }

    async trades({
        args,
        fields,
        headers,
    }: {
        args?: TradesArgs;
        fields: (keyof Trade | Partial<Record<keyof Trade[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Trade[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($trade_id: String,$instrument_id: String,$order_id: String,$side: String,$counter_order_id: String,$user_id: String,$search: String) {
                    trades(trade_id:$trade_id,instrument_id:$instrument_id,order_id:$order_id,side:$side,counter_order_id:$counter_order_id,user_id:$user_id,search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'trades',
        );
    }

    async sso_settings({
        fields,
        headers,
    }: {
        fields: (keyof SsoSettingsResult | Partial<Record<keyof SsoSettingsResult, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<SsoSettingsResult> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query {
                    sso_settings
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            {},
            headers,
            'sso_settings',
        );
    }

    async healthcheck({
        fields,
        headers,
    }: {
        fields: (keyof HealthcheckResult | Partial<Record<keyof HealthcheckResult, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<HealthcheckResult> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query {
                    healthcheck
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            {},
            headers,
            'healthcheck',
        );
    }

    async instruments({
        args,
        fields,
        headers,
    }: {
        args?: InstrumentsArgs;
        fields: (keyof Instrument | Partial<Record<keyof Instrument[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Instrument[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($instrument_id: String,$is_active: ToggleSwitch,$search: String) {
                    instruments(instrument_id:$instrument_id,is_active:$is_active,search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'instruments',
        );
    }

    async instrument_price_bars({
        args,
        fields,
        headers,
    }: {
        args: InstrumentPriceBarsArgs;
        fields: (keyof InstrumentPriceHistory | Partial<Record<keyof InstrumentPriceHistory[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<InstrumentPriceHistory[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($periodicity: InstrumentHistoryPeriodicity,$limit: Int,$instrument_id: String!) {
                    instrument_price_bars(periodicity:$periodicity,limit:$limit,instrument_id:$instrument_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'instrument_price_bars',
        );
    }

    async currencies({
        args,
        fields,
        headers,
    }: {
        args?: CurrenciesArgs;
        fields: (keyof Currency | Partial<Record<keyof Currency[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Currency[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($search: String,$type: CurrencyType) {
                    currencies(search:$search,type:$type)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'currencies',
        );
    }

    async deposit_bank_details_fiat({
        args,
        fields,
        headers,
    }: {
        args: DepositBankDetailsFiatArgs;
        fields: (keyof DepositBankDetailsFiatResult | Partial<Record<keyof DepositBankDetailsFiatResult, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<DepositBankDetailsFiatResult> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($user_id: String,$currency_id: String!,$fiat_transfer_type: String) {
                    deposit_bank_details_fiat(user_id:$user_id,currency_id:$currency_id,fiat_transfer_type:$fiat_transfer_type)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'deposit_bank_details_fiat',
        );
    }

    async payments({
        args,
        fields,
        headers,
    }: {
        args: PaymentsArgs;
        fields: (keyof Payment | Partial<Record<keyof Payment[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Payment[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($payment_id: String,$currency_id: String,$type: PaymentType,$reference: String,$created_by: String,$payment_id_in: String!,$payment_id_not_in: String!,$user_id: String,$user_id_in: String!,$user_id_not_in: String!,$search: String,$status: PaymentStatus!,$approval_status: PaymentApprovalStatus!) {
                    payments(payment_id:$payment_id,currency_id:$currency_id,type:$type,reference:$reference,created_by:$created_by,payment_id_in:$payment_id_in,payment_id_not_in:$payment_id_not_in,user_id:$user_id,user_id_in:$user_id_in,user_id_not_in:$user_id_not_in,search:$search,status:$status,approval_status:$approval_status)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'payments',
        );
    }

    async deposit_address_crypto({
        args,
        fields,
        headers,
    }: {
        args: DepositAddressCryptoArgs;
        fields: (keyof DepositAddressCrypto | Partial<Record<keyof DepositAddressCrypto, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<DepositAddressCrypto> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($user_id: String,$currency_id: String!,$network: String,$reference: String,$psp_service_id: String) {
                    deposit_address_crypto(user_id:$user_id,currency_id:$currency_id,network:$network,reference:$reference,psp_service_id:$psp_service_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'deposit_address_crypto',
        );
    }

    async deposit_addresses_crypto({
        args,
        fields,
        headers,
    }: {
        args?: DepositAddressesCryptoArgs;
        fields: (keyof DepositAddressCrypto | Partial<Record<keyof DepositAddressCrypto[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<DepositAddressCrypto[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($deposit_address_crypto_id: String,$currency_id: String,$address: String,$address_tag_type: CryptoAddressTagType,$address_tag_value: String,$network: String,$psp_service_id: String,$reference: String,$user_id: String,$search: String) {
                    deposit_addresses_crypto(deposit_address_crypto_id:$deposit_address_crypto_id,currency_id:$currency_id,address:$address,address_tag_type:$address_tag_type,address_tag_value:$address_tag_value,network:$network,psp_service_id:$psp_service_id,reference:$reference,user_id:$user_id,search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'deposit_addresses_crypto',
        );
    }

    async conversions({
        args,
        fields,
        headers,
    }: {
        args?: ConversionsArgs;
        fields: (keyof Conversion | Partial<Record<keyof Conversion[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Conversion[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($user_id: String,$search: String,$conversion_quote_id: String,$source_currency_id: String,$target_currency_id: String) {
                    conversions(user_id:$user_id,search:$search,conversion_quote_id:$conversion_quote_id,source_currency_id:$source_currency_id,target_currency_id:$target_currency_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'conversions',
        );
    }

    async conversion_quotes({
        args,
        fields,
        headers,
    }: {
        args?: ConversionQuotesArgs;
        fields: (keyof ConversionQuote | Partial<Record<keyof ConversionQuote[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<ConversionQuote[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($user_id: String,$search: String,$conversion_quote_id: String,$source_currency_id: String,$target_currency_id: String) {
                    conversion_quotes(user_id:$user_id,search:$search,conversion_quote_id:$conversion_quote_id,source_currency_id:$source_currency_id,target_currency_id:$target_currency_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'conversion_quotes',
        );
    }

    async conversion_quotes_risks({
        args,
        fields,
        headers,
    }: {
        args?: ConversionQuotesRisksArgs;
        fields: (keyof ConversionQuotesRisks | Partial<Record<keyof ConversionQuotesRisks[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<ConversionQuotesRisks[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($source_currency_id: String,$target_currency_id: String,$instrument_id: String,$include_all_quotes: Boolean,$user_id: String) {
                    conversion_quotes_risks(source_currency_id:$source_currency_id,target_currency_id:$target_currency_id,instrument_id:$instrument_id,include_all_quotes:$include_all_quotes,user_id:$user_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'conversion_quotes_risks',
        );
    }

    async users({
        args,
        fields,
        headers,
    }: {
        args?: UsersArgs;
        fields: (keyof User | Partial<Record<keyof User[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<User[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($parent_user_id: String,$username: String,$email: String,$kyc_level: String,$kyc_status: UserKycStatus,$affiliate_code: String,$user_id: String,$search: String) {
                    users(parent_user_id:$parent_user_id,username:$username,email:$email,kyc_level:$kyc_level,kyc_status:$kyc_status,affiliate_code:$affiliate_code,user_id:$user_id,search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'users',
        );
    }

    async total_users({headers}: {headers?: HeadersInit} = {}): Promise<number> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query {
                    total_users
                }
            `,
            {},
            headers,
            'total_users',
        );
    }

    async user({
        args,
        fields,
        headers,
    }: {
        args?: UserArgs;
        fields: (keyof User | Partial<Record<keyof User, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<User> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($user_id: String) {
                    user(user_id:$user_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'user',
        );
    }

    async account_transactions({
        args,
        fields,
        headers,
    }: {
        args?: AccountTransactionsArgs;
        fields: (keyof AccountTransaction | Partial<Record<keyof AccountTransaction[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<AccountTransaction[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($account_transaction_id: String,$parent_transaction_id: String,$client_transaction_id: String,$account_id: String,$payment_id: String,$currency_id: String,$transaction_class: AccountTransactionClass,$type: AccountTransactionType,$order_id: String,$trade_id: String,$conversion_id: String,$comment: String,$user_id: String,$search: String,$instrument_id: String) {
                    account_transactions(account_transaction_id:$account_transaction_id,parent_transaction_id:$parent_transaction_id,client_transaction_id:$client_transaction_id,account_id:$account_id,payment_id:$payment_id,currency_id:$currency_id,transaction_class:$transaction_class,type:$type,order_id:$order_id,trade_id:$trade_id,conversion_id:$conversion_id,comment:$comment,user_id:$user_id,search:$search,instrument_id:$instrument_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'account_transactions',
        );
    }

    async accounts_balances({
        args,
        fields,
        headers,
    }: {
        args?: AccountsBalancesArgs;
        fields: (keyof AccountBalance | Partial<Record<keyof AccountBalance[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<AccountBalance[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($user_id: String) {
                    accounts_balances(user_id:$user_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'accounts_balances',
        );
    }

    async accounts({
        args,
        fields,
        headers,
    }: {
        args?: AccountsArgs;
        fields: (keyof Account | Partial<Record<keyof Account[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Account[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($account_id: String,$currency_id: String,$user_id: String) {
                    accounts(account_id:$account_id,currency_id:$currency_id,user_id:$user_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'accounts',
        );
    }

    async limits_groups({
        args,
        fields,
        headers,
    }: {
        args?: LimitsGroupsArgs;
        fields: (keyof LimitGroup | Partial<Record<keyof LimitGroup[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<LimitGroup[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($limit_group_id: String,$name: String,$description: String) {
                    limits_groups(limit_group_id:$limit_group_id,name:$name,description:$description)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'limits_groups',
        );
    }

    async fees_groups({
        args,
        fields,
        headers,
    }: {
        args?: FeesGroupsArgs;
        fields: (keyof FeeGroup | Partial<Record<keyof FeeGroup[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<FeeGroup[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($fee_group_id: String,$name: String,$description: String,$beneficiary_user_id: String) {
                    fees_groups(fee_group_id:$fee_group_id,name:$name,description:$description,beneficiary_user_id:$beneficiary_user_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'fees_groups',
        );
    }

    async payments_fees({
        args,
        fields,
        headers,
    }: {
        args?: PaymentsFeesArgs;
        fields: (keyof PaymentFee | Partial<Record<keyof PaymentFee[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<PaymentFee[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($currency_id: String,$fee_group_id: String) {
                    payments_fees(currency_id:$currency_id,fee_group_id:$fee_group_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'payments_fees',
        );
    }

    async trading_fees({
        args,
        fields,
        headers,
    }: {
        args?: TradingFeesArgs;
        fields: (keyof TradingFee | Partial<Record<keyof TradingFee[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<TradingFee[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($instrument_id: String,$fee_group_id: String) {
                    trading_fees(instrument_id:$instrument_id,fee_group_id:$fee_group_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'trading_fees',
        );
    }

    async payments_routes({
        args,
        fields,
        headers,
    }: {
        args?: PaymentsRoutesArgs;
        fields: (keyof PaymentRoute | Partial<Record<keyof PaymentRoute[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<PaymentRoute[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($payment_route_id: String,$currency_id: String,$psp_service_id: String,$crypto_network: String) {
                    payments_routes(payment_route_id:$payment_route_id,currency_id:$currency_id,psp_service_id:$psp_service_id,crypto_network:$crypto_network)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'payments_routes',
        );
    }

    async crypto_networks({
        fields,
        headers,
    }: {
        fields: (keyof CryptoNetwork | Partial<Record<keyof CryptoNetwork[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<CryptoNetwork[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query {
                    crypto_networks
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            {},
            headers,
            'crypto_networks',
        );
    }

    async psp_services({headers}: {headers?: HeadersInit} = {}): Promise<string[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query {
                    psp_services
                }
            `,
            {},
            headers,
            'psp_services',
        );
    }

    async payments_limits({
        args,
        fields,
        headers,
    }: {
        args?: PaymentsLimitsArgs;
        fields: (keyof PaymentLimit | Partial<Record<keyof PaymentLimit[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<PaymentLimit[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($limit_group_id: String,$currency_id: String) {
                    payments_limits(limit_group_id:$limit_group_id,currency_id:$currency_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'payments_limits',
        );
    }

    async api_keys({
        args,
        fields,
        headers,
    }: {
        args?: ApiKeysArgs;
        fields: (keyof ApiKey | Partial<Record<keyof ApiKey[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<ApiKey[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($user_id: String,$search: String) {
                    api_keys(user_id:$user_id,search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'api_keys',
        );
    }

    async cognito_pools({
        args,
        fields,
        headers,
    }: {
        args?: CognitoPoolsArgs;
        fields: (keyof CognitoPool | Partial<Record<keyof CognitoPool[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<CognitoPool[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($search: String) {
                    cognito_pools(search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'cognito_pools',
        );
    }

    async instruments_strategies({
        args,
        fields,
        headers,
    }: {
        args?: InstrumentsStrategiesArgs;
        fields: (keyof InstrumentStrategy | Partial<Record<keyof InstrumentStrategy[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<InstrumentStrategy[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($hedging_adapter_id: String,$instrument_id: String,$search: String) {
                    instruments_strategies(hedging_adapter_id:$hedging_adapter_id,instrument_id:$instrument_id,search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'instruments_strategies',
        );
    }

    async hedging_orders({
        args,
        fields,
        headers,
    }: {
        args?: HedgingOrdersArgs;
        fields: (keyof HedgingOrder | Partial<Record<keyof HedgingOrder[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<HedgingOrder[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($hedging_adapter_id: String,$side: OrderSide,$status: HedgingOrderStatus,$error_message: String,$search: String) {
                    hedging_orders(hedging_adapter_id:$hedging_adapter_id,side:$side,status:$status,error_message:$error_message,search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'hedging_orders',
        );
    }

    async system_settings({
        args,
        fields,
        headers,
    }: {
        args?: SystemSettingsArgs;
        fields: (keyof Setting | Partial<Record<keyof Setting[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Setting[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($search: String) {
                    system_settings(search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'system_settings',
        );
    }

    async notification_settings({
        fields,
        headers,
    }: {
        fields: (keyof NotificationOptions | Partial<Record<keyof NotificationOptions, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<NotificationOptions> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query {
                    notification_settings
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            {},
            headers,
            'notification_settings',
        );
    }

    async geo_restrictions({
        fields,
        headers,
    }: {
        fields: (keyof GeoRestrictions | Partial<Record<keyof GeoRestrictions, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<GeoRestrictions> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query {
                    geo_restrictions
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            {},
            headers,
            'geo_restrictions',
        );
    }

    async accounts_portfolio_report({
        args,
        fields,
        headers,
    }: {
        args: AccountsPortfolioReportArgs;
        fields: (keyof AccountsPortfolioReportItem | Partial<Record<keyof AccountsPortfolioReportItem[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<AccountsPortfolioReportItem[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($currencies: String!) {
                    accounts_portfolio_report(currencies:$currencies)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'accounts_portfolio_report',
        );
    }

    async orders_summary_report({
        args,
        fields,
        headers,
    }: {
        args?: OrdersSummaryReportArgs;
        fields: (keyof OrdersSummaryReportItem | Partial<Record<keyof OrdersSummaryReportItem[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<OrdersSummaryReportItem[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($user_id: String) {
                    orders_summary_report(user_id:$user_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'orders_summary_report',
        );
    }

    async conversions_summary_report({
        args,
        fields,
        headers,
    }: {
        args?: ConversionsSummaryReportArgs;
        fields: (keyof ConversionsSummaryReportItem | Partial<Record<keyof ConversionsSummaryReportItem[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<ConversionsSummaryReportItem[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($user_id: String) {
                    conversions_summary_report(user_id:$user_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'conversions_summary_report',
        );
    }

    async liquidity_report({
        fields,
        headers,
    }: {
        fields: (keyof LiquidityReportResult | Partial<Record<keyof LiquidityReportResult, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<LiquidityReportResult> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query {
                    liquidity_report
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            {},
            headers,
            'liquidity_report',
        );
    }

    async daily_balances_report({
        args,
        fields,
        headers,
    }: {
        args?: DailyBalancesReportArgs;
        fields: (keyof DailyBalancesReportItem | Partial<Record<keyof DailyBalancesReportItem[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<DailyBalancesReportItem[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($user_id: String) {
                    daily_balances_report(user_id:$user_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'daily_balances_report',
        );
    }

    async permissions({
        fields,
        headers,
    }: {
        fields: (keyof Permission | Partial<Record<keyof Permission[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Permission[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query {
                    permissions
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            {},
            headers,
            'permissions',
        );
    }

    async permissions_subjects({headers}: {headers?: HeadersInit} = {}): Promise<string[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query {
                    permissions_subjects
                }
            `,
            {},
            headers,
            'permissions_subjects',
        );
    }

    async permissions_share({
        args,
        fields,
        headers,
    }: {
        args?: PermissionsShareArgs;
        fields: (keyof PermissionShare | Partial<Record<keyof PermissionShare[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<PermissionShare[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($search: String,$user_id: String,$subject: String,$group_by: FindPermissionsShareGroupBy) {
                    permissions_share(search:$search,user_id:$user_id,subject:$subject,group_by:$group_by)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'permissions_share',
        );
    }

    async kyc_preference({
        fields,
        headers,
    }: {
        fields: (keyof KycPreference | Partial<Record<keyof KycPreference, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<KycPreference> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query {
                    kyc_preference
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            {},
            headers,
            'kyc_preference',
        );
    }

    async webhooks({
        args,
        fields,
        headers,
    }: {
        args?: WebhooksArgs;
        fields: (keyof Webhook | Partial<Record<keyof Webhook[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Webhook[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($is_active: ToggleSwitch,$user_id: String,$search: String) {
                    webhooks(is_active:$is_active,user_id:$user_id,search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'webhooks',
        );
    }

    async hedging_adapter_ids({headers}: {headers?: HeadersInit} = {}): Promise<string[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query {
                    hedging_adapter_ids
                }
            `,
            {},
            headers,
            'hedging_adapter_ids',
        );
    }

    async hedging_adapters({
        fields,
        headers,
    }: {
        fields: (keyof HedgingAdapter | Partial<Record<keyof HedgingAdapter[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<HedgingAdapter[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query {
                    hedging_adapters
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            {},
            headers,
            'hedging_adapters',
        );
    }

    async timeline({
        args,
        fields,
        headers,
    }: {
        args: TimelineArgs;
        fields: (keyof TimelineEvent | Partial<Record<keyof TimelineEvent[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<TimelineEvent[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($user_id: String,$event_data: String,$created_at: String,$search: String,$event_name: NotificationTrigger!) {
                    timeline(user_id:$user_id,event_data:$event_data,created_at:$created_at,search:$search,event_name:$event_name)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'timeline',
        );
    }

    async trading_limits({
        args,
        fields,
        headers,
    }: {
        args?: TradingLimitsArgs;
        fields: (keyof TradingLimit | Partial<Record<keyof TradingLimit[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<TradingLimit[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($limit_group_id: String,$instrument_id: String) {
                    trading_limits(limit_group_id:$limit_group_id,instrument_id:$instrument_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'trading_limits',
        );
    }

    async trading_volumes({
        args,
        fields,
        headers,
    }: {
        args?: TradingVolumesArgs;
        fields: (keyof UsersTradingVolume | Partial<Record<keyof UsersTradingVolume[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<UsersTradingVolume[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($user_id: String,$instrument_id: String,$volume: TradingVolumeType) {
                    trading_volumes(user_id:$user_id,instrument_id:$instrument_id,volume:$volume)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'trading_volumes',
        );
    }

    async countries({
        args,
        fields,
        headers,
    }: {
        args?: CountriesArgs;
        fields: (keyof Country | Partial<Record<keyof Country[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Country[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($search: String) {
                    countries(search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'countries',
        );
    }

    async provinces({
        args,
        fields,
        headers,
    }: {
        args: ProvincesArgs;
        fields: (keyof Province | Partial<Record<keyof Province[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<Province[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($country_code: String!,$search: String) {
                    provinces(country_code:$country_code,search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'provinces',
        );
    }

    async delayed_requests({
        args,
        fields,
        headers,
    }: {
        args?: DelayedRequestsArgs;
        fields: (keyof DelayedRequest | Partial<Record<keyof DelayedRequest[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<DelayedRequest[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($delayed_request_id: String,$request_name: String,$approval_status: DelayedRequestStatus,$admin_id: String,$admin_email: String,$approved_by: String,$search: String) {
                    delayed_requests(delayed_request_id:$delayed_request_id,request_name:$request_name,approval_status:$approval_status,admin_id:$admin_id,admin_email:$admin_email,approved_by:$approved_by,search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'delayed_requests',
        );
    }

    async mfa_secret_code({args, headers}: {args: MfaSecretCodeArgs; headers?: HeadersInit}): Promise<string> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query ($access_token: String, $provider: AuthenticationProvider!) {
                    mfa_secret_code(access_token: $access_token, provider: $provider)
                }
            `,
            args || {},
            headers,
            'mfa_secret_code',
        );
    }

    async verify_mfa_secret_token({
        args,
        fields,
        headers,
    }: {
        args: VerifyMfaSecretTokenArgs;
        fields: (keyof MfaResult | Partial<Record<keyof MfaResult, any[]>>)[];
        headers?: HeadersInit;
    }): Promise<MfaResult> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($secret_token: String!,$provider: AuthenticationProvider!,$access_token: String) {
                    verify_mfa_secret_token(secret_token:$secret_token,provider:$provider,access_token:$access_token)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'verify_mfa_secret_token',
        );
    }

    async find_config_changes({
        args,
        fields,
        headers,
    }: {
        args?: FindConfigChangesArgs;
        fields: (keyof ConfigChange | Partial<Record<keyof ConfigChange[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<ConfigChange[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($config_change_id: String,$config_change_group_id: String,$admin_user_id: String,$admin_email: String,$admin_ip: String,$table_name: String,$operation_name: String,$operation_type: ConfigChangeOperationType,$details: String,$search: String) {
                    find_config_changes(config_change_id:$config_change_id,config_change_group_id:$config_change_group_id,admin_user_id:$admin_user_id,admin_email:$admin_email,admin_ip:$admin_ip,table_name:$table_name,operation_name:$operation_name,operation_type:$operation_type,details:$details,search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'find_config_changes',
        );
    }

    async config_changes_events({headers}: {headers?: HeadersInit} = {}): Promise<string[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query {
                    config_changes_events
                }
            `,
            {},
            headers,
            'config_changes_events',
        );
    }

    async get_user_ip_geo_history({
        args,
        fields,
        headers,
    }: {
        args?: GetUserIpGeoHistoryArgs;
        fields: (keyof UserIpGeoHistory | Partial<Record<keyof UserIpGeoHistory[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<UserIpGeoHistory[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($date_ts: String,$user_id: String,$ip_address: String,$country: String) {
                    get_user_ip_geo_history(date_ts:$date_ts,user_id:$user_id,ip_address:$ip_address,country:$country)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'get_user_ip_geo_history',
        );
    }

    async get_user_ip_geo_history_dashboard({
        args,
        fields,
        headers,
    }: {
        args?: GetUserIpGeoHistoryDashboardArgs;
        fields: (keyof UserIpGeoHistory | Partial<Record<keyof UserIpGeoHistory[], any[]>>)[];
        headers?: HeadersInit;
    }): Promise<UserIpGeoHistory[]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query($ip_address: String,$from_date: DateTime,$to_date: String) {
                    get_user_ip_geo_history_dashboard(ip_address:$ip_address,from_date:$from_date,to_date:$to_date)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,
            args || {},
            headers,
            'get_user_ip_geo_history_dashboard',
        );
    }

    async portfolio_history({args, headers}: {args: PortfolioHistoryArgs; headers?: HeadersInit}): Promise<number[][]> {
        if (!headers) headers = {};
        return this.gql_request(
            gql`
                query (
                    $currency_id: String!
                    $user_id: String
                    $timestamp: String!
                    $interval: PortfolioHistoryInterval!
                ) {
                    portfolio_history(
                        currency_id: $currency_id
                        user_id: $user_id
                        timestamp: $timestamp
                        interval: $interval
                    )
                }
            `,
            args || {},
            headers,
            'portfolio_history',
        );
    }
}
