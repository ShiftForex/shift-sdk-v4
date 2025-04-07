import { gql, GraphQLClient, RequestDocument } from 'graphql-request';

export enum UserUpdateNotificationClass {
success = 'success',
error = 'error',
info = 'info'
}

export enum NotificationTrigger {
signin = 'signin',
user_created = 'user_created',
user_updated = 'user_updated',
user_deleted = 'user_deleted',
account_created = 'account_created',
crypto_address_created = 'crypto_address_created',
kyc_approved = 'kyc_approved',
kyc_rejected = 'kyc_rejected',
kyc_incomplete = 'kyc_incomplete',
kyc_not_started = 'kyc_not_started',
kyc_submitted = 'kyc_submitted',
trade_completed = 'trade_completed',
order_new = 'order_new',
order_traded = 'order_traded',
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
payment_approved = 'payment_approved',
payment_manual_approval_required = 'payment_manual_approval_required',
crypto_address_added = 'crypto_address_added',
manual_balance_update = 'manual_balance_update',
mfa_enabled = 'mfa_enabled',
kyt_pending = 'kyt_pending',
kyt_pending_aml = 'kyt_pending_aml',
kyt_approved = 'kyt_approved',
kyt_rejected = 'kyt_rejected',
payment_route_created = 'payment_route_created',
payment_route_updated = 'payment_route_updated',
payment_route_deleted = 'payment_route_deleted',
payment_fee_created = 'payment_fee_created',
payment_fee_updated = 'payment_fee_updated',
payment_fee_deleted = 'payment_fee_deleted',
account_transaction = 'account_transaction',
strategy_rule_violation = 'strategy_rule_violation',
vault_deposit = 'vault_deposit',
vault_withdrawal = 'vault_withdrawal',
vault_lock_expired = 'vault_lock_expired',
vault_expired = 'vault_expired',
vault_deactivated = 'vault_deactivated',
vault_interests_accrued = 'vault_interests_accrued',
referral_rewarded = 'referral_rewarded',
margin_call = 'margin_call',
margin_liquidation = 'margin_liquidation'
}

export enum OrderTimeInForce {
fok = 'fok',
ioc = 'ioc',
gtc = 'gtc',
gtd = 'gtd'
}

export enum OrderType {
limit = 'limit',
market = 'market',
stop_market = 'stop_market',
stop_limit = 'stop_limit'
}

export enum OrderSide {
sell = 'sell',
buy = 'buy'
}

export enum OrderStatus {
new = 'new',
pending = 'pending',
completed = 'completed',
cancelled = 'cancelled',
rejected = 'rejected',
expired = 'expired'
}

export enum OrderQuantityMode {
base = 'base',
quote = 'quote'
}

export enum CurrencyType {
crypto = 'crypto',
fiat = 'fiat'
}

export enum ToggleSwitch {
on = 'on',
off = 'off'
}

export enum CryptoAddressTagType {
destination_tag = 'destination_tag',
memo_id = 'memo_id',
note = 'note',
tag = 'tag'
}

export enum Role {
admin = 'admin',
trader = 'trader'
}

export enum UserKycStatus {
incomplete = 'incomplete',
rejected = 'rejected',
approved = 'approved',
submitted = 'submitted',
not_started = 'not_started'
}

export enum KycType {
individual = 'individual',
corporate = 'corporate'
}

export enum AccountTransactionClass {
trade = 'trade',
fee = 'fee',
payment = 'payment',
reward = 'reward',
conversion = 'conversion',
manual = 'manual',
referral_reward = 'referral_reward'
}

export enum AccountTransactionType {
debit = 'debit',
credit = 'credit'
}

export enum FeeCalculationType {
sum = 'sum',
max = 'max'
}

export enum HedgingOrderStatus {
new = 'new',
pending = 'pending',
completed = 'completed',
cancelled = 'cancelled',
rejected = 'rejected'
}

export enum InstrumentHistoryPeriodicity {
minute = 'minute',
minute5 = 'minute5',
minute10 = 'minute10',
minute15 = 'minute15',
minute30 = 'minute30',
hour = 'hour',
hour4 = 'hour4',
hour8 = 'hour8',
day = 'day',
week = 'week',
month = 'month'
}

export enum InstrumentStrategyHedgingOrderPrice {
tob = 'tob',
vwap = 'vwap'
}

export enum OnMinSpreadViolation {
allow = 'allow',
discard_crossed_layers = 'discard_crossed_layers',
discard_entire_book = 'discard_entire_book',
adjust_crossed_layers = 'adjust_crossed_layers'
}

export enum DayOfWeek {
sun = 'sun',
mon = 'mon',
tue = 'tue',
wed = 'wed',
thu = 'thu',
fri = 'fri',
sat = 'sat'
}

export enum InstrumentStrategyAlertTrigger {
orderbook_min_total_volume_violation = 'orderbook_min_total_volume_violation',
orderbook_min_ask_volume_violation = 'orderbook_min_ask_volume_violation',
orderbook_min_bid_volume_violation = 'orderbook_min_bid_volume_violation',
orderbook_max_spread_violation = 'orderbook_max_spread_violation',
orderbook_update_interval_violation = 'orderbook_update_interval_violation'
}

export enum UploadDocumentType {
profile_picture = 'profile_picture',
passport = 'passport',
national_identity = 'national_identity',
driver_license = 'driver_license',
birth_certificate = 'birth_certificate',
bank_statement = 'bank_statement',
utility_bill = 'utility_bill',
proof_of_residence = 'proof_of_residence',
proof_of_id_front = 'proof_of_id_front',
proof_of_id_back = 'proof_of_id_back',
company_registration = 'company_registration',
memorandum_of_association = 'memorandum_of_association'
}

export enum ApiKeyTypes {
trader = 'trader',
admin = 'admin',
service = 'service'
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
currencies_prices = 'currencies_prices',
create_currency_price = 'create_currency_price',
update_currency_price = 'update_currency_price',
delete_currency_price = 'delete_currency_price',
set_currency_price = 'set_currency_price',
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
aggregated_strategies = 'aggregated_strategies',
create_aggregated_strategy = 'create_aggregated_strategy',
update_aggregated_strategy = 'update_aggregated_strategy',
delete_aggregated_strategy = 'delete_aggregated_strategy',
instruments = 'instruments',
create_instrument = 'create_instrument',
update_instrument = 'update_instrument',
delete_instrument = 'delete_instrument',
instruments_strategies_schedule = 'instruments_strategies_schedule',
create_instruments_strategies_schedule = 'create_instruments_strategies_schedule',
update_instruments_strategies_schedule = 'update_instruments_strategies_schedule',
delete_instruments_strategies_schedule = 'delete_instruments_strategies_schedule',
limits_groups = 'limits_groups',
create_limit_group = 'create_limit_group',
update_limit_group = 'update_limit_group',
delete_limit_group = 'delete_limit_group',
payments_limits = 'payments_limits',
create_payment_limit = 'create_payment_limit',
update_payment_limit = 'update_payment_limit',
delete_payment_limit = 'delete_payment_limit',
aggregated_payments_limits = 'aggregated_payments_limits',
create_aggregated_payment_limit = 'create_aggregated_payment_limit',
update_aggregated_payment_limit = 'update_aggregated_payment_limit',
delete_aggregated_payment_limit = 'delete_aggregated_payment_limit',
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
hedging_accounts = 'hedging_accounts',
update_hedging_account = 'update_hedging_account',
payments = 'payments',
approve_payments = 'approve_payments',
create_withdrawal_crypto = 'create_withdrawal_crypto',
create_withdrawal_fiat = 'create_withdrawal_fiat',
create_deposit_fiat = 'create_deposit_fiat',
deposit_bank_details_fiat = 'deposit_bank_details_fiat',
deposit_addresses_crypto = 'deposit_addresses_crypto',
update_payment_approval_status = 'update_payment_approval_status',
reprocess_payment = 'reprocess_payment',
system_settings = 'system_settings',
system_logs = 'system_logs',
update_system_settings = 'update_system_settings',
upload_user_document = 'upload_user_document',
users = 'users',
update_user = 'update_user',
create_user = 'create_user',
permissions_share = 'permissions_share',
create_permissions_share = 'create_permissions_share',
delete_permissions_share = 'delete_permissions_share',
notification_settings = 'notification_settings',
update_notification_settings = 'update_notification_settings',
create_kyc_manual_request = 'create_kyc_manual_request',
update_kyc_preference = 'update_kyc_preference',
estimate_network_fee = 'estimate_network_fee',
webhooks = 'webhooks',
create_webhook = 'create_webhook',
update_webhook = 'update_webhook',
delete_webhook = 'delete_webhook',
update_maintenance_mode = 'update_maintenance_mode',
update_geo_restrictions = 'update_geo_restrictions',
liquidity_report = 'liquidity_report',
daily_balances_report = 'daily_balances_report',
timeline = 'timeline',
audit_trail_log = 'audit_trail_log',
find_config_changes = 'find_config_changes',
create_payment_manual = 'create_payment_manual',
send_test_email = 'send_test_email',
delayed_requests = 'delayed_requests',
update_delayed_requests = 'update_delayed_requests',
delayed_request_settings = 'delayed_request_settings',
update_delayed_request_settings = 'update_delayed_request_settings',
kyc_user_data = 'kyc_user_data',
create_kyc_user_data = 'create_kyc_user_data',
update_kyc_user_data = 'update_kyc_user_data',
create_ip_blacklist_item = 'create_ip_blacklist_item',
update_ip_blacklist_item = 'update_ip_blacklist_item',
remove_ip_blacklist_item = 'remove_ip_blacklist_item',
blacklist_items = 'blacklist_items',
ip_whitelist = 'ip_whitelist',
create_ip_whitelist_items = 'create_ip_whitelist_items',
update_ip_whitelist_item = 'update_ip_whitelist_item',
delete_ip_whitelist_item = 'delete_ip_whitelist_item',
crypto_pay_core = 'crypto_pay_core',
crypto_pay_submerchants = 'crypto_pay_submerchants',
kyt_payments = 'kyt_payments',
update_kyt_payments = 'update_kyt_payments',
reprocess_kyt_payment = 'reprocess_kyt_payment',
kyt_screening_threshold = 'kyt_screening_threshold',
update_kyt_screening_threshold = 'update_kyt_screening_threshold',
instruments_strategies_rules = 'instruments_strategies_rules',
create_instrument_strategy_rule = 'create_instrument_strategy_rule',
update_instrument_strategy_rule = 'update_instrument_strategy_rule',
delete_instrument_strategy_rule = 'delete_instrument_strategy_rule',
instruments_strategies_alerts = 'instruments_strategies_alerts',
vaults = 'vaults',
create_vault = 'create_vault',
update_vault = 'update_vault',
delete_vault = 'delete_vault',
vaults_transactions = 'vaults_transactions',
create_vault_transaction = 'create_vault_transaction',
create_vault_manual_transaction = 'create_vault_manual_transaction',
create_vault_withdrawal = 'create_vault_withdrawal',
create_vault_deposit = 'create_vault_deposit',
trading_grids = 'trading_grids',
set_trading_grid = 'set_trading_grid',
vaults_accounts = 'vaults_accounts',
trigger_vaults_interests_calculation = 'trigger_vaults_interests_calculation',
trigger_vaults_locks_withdrawals = 'trigger_vaults_locks_withdrawals',
trigger_expired_vaults_processing = 'trigger_expired_vaults_processing',
trigger_delayed_vaults_trx_processing = 'trigger_delayed_vaults_trx_processing',
estimate_vault_interests = 'estimate_vault_interests',
vaults_transactions_requests = 'vaults_transactions_requests',
update_vault_transaction_request = 'update_vault_transaction_request',
cancel_vault_transaction_request = 'cancel_vault_transaction_request',
referrals = 'referrals',
create_referral = 'create_referral',
claim_referral = 'claim_referral',
referrals_history = 'referrals_history',
referral_rewards = 'referral_rewards',
create_referral_reward = 'create_referral_reward',
update_referral_reward = 'update_referral_reward',
delete_referral_reward = 'delete_referral_reward',
analytics_dashboard = 'analytics_dashboard',
aggregate_dashboard = 'aggregate_dashboard',
restart_system = 'restart_system',
emit_event = 'emit_event',
derivatives_instruments = 'derivatives_instruments',
create_derivatives_instrument = 'create_derivatives_instrument',
update_derivatives_instrument = 'update_derivatives_instrument',
delete_derivatives_instrument = 'delete_derivatives_instrument',
derivatives_instrument_strategies = 'derivatives_instrument_strategies',
create_derivatives_instrument_strategy = 'create_derivatives_instrument_strategy',
update_derivatives_instrument_strategy = 'update_derivatives_instrument_strategy',
delete_derivatives_instrument_strategy = 'delete_derivatives_instrument_strategy',
derivatives_fee_groups = 'derivatives_fee_groups',
create_derivatives_fee_group = 'create_derivatives_fee_group',
update_derivatives_fee_group = 'update_derivatives_fee_group',
delete_derivatives_fee_group = 'delete_derivatives_fee_group',
derivatives_hedging_adapters = 'derivatives_hedging_adapters',
create_derivatives_hedging_adapter = 'create_derivatives_hedging_adapter',
update_derivatives_hedging_adapter = 'update_derivatives_hedging_adapter',
delete_derivatives_hedging_adapter = 'delete_derivatives_hedging_adapter',
derivatives_currencies = 'derivatives_currencies',
create_derivatives_currency = 'create_derivatives_currency',
update_derivatives_currency = 'update_derivatives_currency',
delete_derivatives_currency = 'delete_derivatives_currency',
create_derivatives_order = 'create_derivatives_order',
cancel_derivatives_order = 'cancel_derivatives_order',
estimate_derivatives_order = 'estimate_derivatives_order',
open_derivatives_orders = 'open_derivatives_orders',
closed_derivatives_orders = 'closed_derivatives_orders',
update_open_derivatives_position = 'update_open_derivatives_position',
open_derivatives_positions = 'open_derivatives_positions',
closed_derivatives_positions = 'closed_derivatives_positions',
derivatives_trading_fees = 'derivatives_trading_fees',
update_derivatives_trading_fee = 'update_derivatives_trading_fee',
derivatives_dashboards = 'derivatives_dashboards'
}

export enum KytProvider {
elliptic = 'elliptic',
scorechain = 'scorechain'
}

export enum KytAnalysisTarget {
wallet = 'wallet',
transaction = 'transaction',
address = 'address'
}

export enum PaymentKytStatus {
inactive = 'inactive',
pending = 'pending',
pending_aml = 'pending_aml',
approved = 'approved',
rejected = 'rejected'
}

export enum PaymentType {
withdrawal = 'withdrawal',
deposit = 'deposit'
}

export enum CryptoNetworkFeePreference {
low = 'low',
medium = 'medium',
high = 'high'
}

export enum PaymentStatus {
new = 'new',
processing = 'processing',
rejected = 'rejected',
completed = 'completed',
unconfirmed = 'unconfirmed'
}

export enum PaymentApprovalStatus {
pending = 'pending',
approved = 'approved',
rejected = 'rejected'
}

export enum VerificationType {
none = 'none',
totp = 'totp',
bank_id = 'bank_id',
sms = 'sms',
local_mfa = 'local_mfa',
cognito_mfa = 'cognito_mfa'
}

export enum ConversionStatus {
new = 'new',
completed = 'completed',
rejected = 'rejected'
}

export enum ReferralRewardType {
one_time = 'one_time',
fee_commission = 'fee_commission',
fee_cashback = 'fee_cashback',
rebate = 'rebate'
}

export enum DelayedRequestStatus {
pending = 'pending',
approved = 'approved',
rejected = 'rejected'
}

export enum VaultRateType {
flexible = 'flexible',
fixed = 'fixed'
}

export enum VaultWithdrawalPolicy {
instant = 'instant',
delayed = 'delayed',
manual_approval = 'manual_approval'
}

export enum VaultsTransactionClass {
deposit = 'deposit',
withdrawal = 'withdrawal',
interest = 'interest',
manual = 'manual'
}

export enum VaultTransactionRequestStatus {
pending = 'pending',
approved = 'approved',
rejected = 'rejected',
cancelled = 'cancelled'
}

export enum TradginGridMode {
arithmetic = 'arithmetic',
geometric = 'geometric'
}

export enum TradingGridStatus {
pending_collateral_reservation = 'pending_collateral_reservation',
collateral_reserved = 'collateral_reserved',
pending_collateral_release = 'pending_collateral_release',
collateral_released = 'collateral_released',
working = 'working',
pending_stop = 'pending_stop',
stopped = 'stopped',
errored = 'errored'
}

export enum TradingGridLevelStatus {
pending_buy_order_creation = 'pending_buy_order_creation',
buy_order_created = 'buy_order_created',
buy_order_completed = 'buy_order_completed',
buy_order_failed = 'buy_order_failed',
pending_sell_order_creation = 'pending_sell_order_creation',
sell_order_created = 'sell_order_created',
sell_order_completed = 'sell_order_completed',
sell_order_failed = 'sell_order_failed',
pending_stop = 'pending_stop',
stopped = 'stopped',
errored = 'errored'
}

export enum KycProvider {
SUM_AND_SUBSTANCE = 'SUM_AND_SUBSTANCE',
BANK_ID = 'BANK_ID',
MANUAL = 'MANUAL',
SIGNICAT = 'SIGNICAT',
UBBLE = 'UBBLE',
TRULIOO = 'TRULIOO'
}

export enum KycProviderEnv {
Sandbox = 'Sandbox',
Production = 'Production'
}

export enum Platform {
android = 'android',
ios = 'ios'
}

export enum QueryEnum {
version = 'version',
open_orders = 'open_orders',
closed_orders = 'closed_orders',
estimate_order = 'estimate_order',
trades = 'trades',
sso_settings = 'sso_settings',
healthcheck = 'healthcheck',
admins = 'admins',
instruments = 'instruments',
instrument_price_bars = 'instrument_price_bars',
currencies = 'currencies',
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
default_notifications = 'default_notifications',
delayed_mutations = 'delayed_mutations',
geo_restrictions = 'geo_restrictions',
trader_mfa_provider = 'trader_mfa_provider',
admin_mfa_provider = 'admin_mfa_provider',
is_margin_trading_enabled = 'is_margin_trading_enabled',
products_enabled = 'products_enabled',
user_products_enabled = 'user_products_enabled',
accounts_portfolio_report = 'accounts_portfolio_report',
orders_summary_report = 'orders_summary_report',
conversions_summary_report = 'conversions_summary_report',
liquidity_report = 'liquidity_report',
daily_balances_report = 'daily_balances_report',
open_exposure_report = 'open_exposure_report',
permissions = 'permissions',
permissions_subjects = 'permissions_subjects',
all_permission_subjects = 'all_permission_subjects',
permissions_share = 'permissions_share',
kyc_preferences = 'kyc_preferences',
vasps_list = 'vasps_list',
webhooks = 'webhooks',
hedging_adapter_ids = 'hedging_adapter_ids',
hedging_adapters = 'hedging_adapters',
timeline = 'timeline',
trading_limits = 'trading_limits',
trading_volumes = 'trading_volumes',
countries = 'countries',
provinces = 'provinces',
delayed_requests = 'delayed_requests',
kyc_user_data = 'kyc_user_data',
permission_presets = 'permission_presets',
instruments_strategies_schedule = 'instruments_strategies_schedule',
currencies_prices = 'currencies_prices',
currency_prices = 'currency_prices',
convert_currency_amount = 'convert_currency_amount',
ip_whitelist = 'ip_whitelist',
hedging_accounts = 'hedging_accounts',
margin_account_transactions = 'margin_account_transactions',
margin_users_free_balances = 'margin_users_free_balances',
admin_properties = 'admin_properties',
admin_mfa_status = 'admin_mfa_status',
elliptic_screenings = 'elliptic_screenings',
elliptic_risk_threshold = 'elliptic_risk_threshold',
scorechain_screenings = 'scorechain_screenings',
scorechain_minimal_risk_score = 'scorechain_minimal_risk_score',
instruments_strategies_rules = 'instruments_strategies_rules',
instruments_strategies_alerts = 'instruments_strategies_alerts',
vaults = 'vaults',
vaults_average_user_apy = 'vaults_average_user_apy',
estimate_vault_interests = 'estimate_vault_interests',
vaults_accounts = 'vaults_accounts',
vaults_total_user_balance_quoted = 'vaults_total_user_balance_quoted',
vaults_transactions = 'vaults_transactions',
portfolio_history = 'portfolio_history',
profits_dashboard = 'profits_dashboard',
conversions_dashboard = 'conversions_dashboard',
volume_dashboard = 'volume_dashboard',
deposits_dashboard = 'deposits_dashboard',
withdrawals_dashboard = 'withdrawals_dashboard',
summary_dashboard = 'summary_dashboard',
unified_transactions = 'unified_transactions',
unified_transactions_lps = 'unified_transactions_lps',
vaults_transactions_requests = 'vaults_transactions_requests',
referrals = 'referrals',
aggregated_payments_limits = 'aggregated_payments_limits',
audit_trail_log = 'audit_trail_log',
my_audit_trail_log = 'my_audit_trail_log',
admin_events_log = 'admin_events_log',
referrals_history = 'referrals_history',
referred_users_count = 'referred_users_count',
referrer_total_reward_quoted = 'referrer_total_reward_quoted',
blacklist_items = 'blacklist_items',
system_logs = 'system_logs',
whoami = 'whoami',
referrals_transactions_info = 'referrals_transactions_info',
license = 'license',
referral_rewards = 'referral_rewards',
required_actions = 'required_actions',
trading_grids = 'trading_grids',
trading_grid_levels = 'trading_grid_levels',
user_fees_config = 'user_fees_config',
estimate_payment_notional_fee = 'estimate_payment_notional_fee',
cash_holdings_report = 'cash_holdings_report',
trade_tiers = 'trade_tiers',
trade_volumes = 'trade_volumes',
wallets = 'wallets',
user_ip_geo_history = 'user_ip_geo_history',
user_ip_geo_history_overview = 'user_ip_geo_history_overview',
user_ip_geo_history_detail = 'user_ip_geo_history_detail'
}

export enum SortDirection {
ASC = 'ASC',
DESC = 'DESC'
}

export enum UserStatus {
active = 'active',
deleted = 'deleted',
all = 'all'
}

export enum ClientRole {
admin = 'admin',
trader = 'trader',
mobile = 'mobile'
}

export enum EPermissionsSearchFor {
self = 'self',
all = 'all'
}

export enum FindPermissionsShareGroupBy {
user_id = 'user_id',
subject = 'subject'
}

export enum TradingVolumeType {
daily = 'daily',
weekly = 'weekly',
monthly = 'monthly'
}

export enum PortfolioHistoryInterval {
minute = 'minute',
hour = 'hour',
day = 'day',
week = 'week',
month = 'month',
year = 'year',
all = 'all'
}

export enum DashboardReportInterval {
daily = 'daily',
monthly = 'monthly'
}

export enum MutationEnum {
restart_system = 'restart_system',
create_order = 'create_order',
update_open_order = 'update_open_order',
cancel_multiple_orders = 'cancel_multiple_orders',
cancel_order = 'cancel_order',
cancel_all_orders = 'cancel_all_orders',
service_signin = 'service_signin',
checkin = 'checkin',
checkout = 'checkout',
restrictions_check = 'restrictions_check',
register_trader_local = 'register_trader_local',
trader_signin_local = 'trader_signin_local',
create_admins = 'create_admins',
delete_admin = 'delete_admin',
admin_signin_local = 'admin_signin_local',
create_local_admin = 'create_local_admin',
create_instrument = 'create_instrument',
update_instrument = 'update_instrument',
delete_instrument = 'delete_instrument',
fill_instrument = 'fill_instrument',
create_currency = 'create_currency',
update_currency = 'update_currency',
delete_currency = 'delete_currency',
validate_address_crypto = 'validate_address_crypto',
reprocess_payment = 'reprocess_payment',
update_payment_approval_status = 'update_payment_approval_status',
create_withdrawal_crypto = 'create_withdrawal_crypto',
create_withdrawal_fiat = 'create_withdrawal_fiat',
create_payment_manual = 'create_payment_manual',
create_conversion_order = 'create_conversion_order',
create_conversion_quote = 'create_conversion_quote',
update_user_fee_group = 'update_user_fee_group',
update_user_limit_group = 'update_user_limit_group',
delete_user = 'delete_user',
add_push_token = 'add_push_token',
clear_push_tokens = 'clear_push_tokens',
change_user_password = 'change_user_password',
update_user_password = 'update_user_password',
update_user = 'update_user',
create_user = 'create_user',
update_anti_phishing_code = 'update_anti_phishing_code',
create_account_transaction = 'create_account_transaction',
create_limit_group = 'create_limit_group',
update_limit_group = 'update_limit_group',
delete_limit_group = 'delete_limit_group',
create_fee_group = 'create_fee_group',
update_fee_group = 'update_fee_group',
delete_fee_group = 'delete_fee_group',
estimate_payment_fee = 'estimate_payment_fee',
estimate_network_fee = 'estimate_network_fee',
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
update_service_api_key = 'update_service_api_key',
create_cognito_pool = 'create_cognito_pool',
update_cognito_pool = 'update_cognito_pool',
delete_cognito_pool = 'delete_cognito_pool',
create_instrument_strategy = 'create_instrument_strategy',
update_instrument_strategy = 'update_instrument_strategy',
update_instrument_strategy_hedge_balance = 'update_instrument_strategy_hedge_balance',
operate_instrument_strategy_hedge_balance = 'operate_instrument_strategy_hedge_balance',
delete_instrument_strategy = 'delete_instrument_strategy',
trigger_create_hedging_remote_order_job = 'trigger_create_hedging_remote_order_job',
trigger_complete_hedging_remote_order_job = 'trigger_complete_hedging_remote_order_job',
trigger_reject_hedging_remote_order_job = 'trigger_reject_hedging_remote_order_job',
update_system_setting = 'update_system_setting',
update_system_settings = 'update_system_settings',
update_maintenance_mode = 'update_maintenance_mode',
update_notifications_settings = 'update_notifications_settings',
update_default_notifications = 'update_default_notifications',
update_delayed_mutations = 'update_delayed_mutations',
update_geo_restrictions = 'update_geo_restrictions',
update_admin_permissions = 'update_admin_permissions',
create_kyc_manual_request = 'create_kyc_manual_request',
create_kyc_session = 'create_kyc_session',
update_kyc_preferences = 'update_kyc_preferences',
create_webhook = 'create_webhook',
update_webhook = 'update_webhook',
delete_webhook = 'delete_webhook',
emit_event = 'emit_event',
create_hedging_adapter = 'create_hedging_adapter',
update_hedging_adapter = 'update_hedging_adapter',
delete_hedging_adapter = 'delete_hedging_adapter',
create_trading_limit = 'create_trading_limit',
update_trading_limit = 'update_trading_limit',
delete_trading_limit = 'delete_trading_limit',
update_delayed_request = 'update_delayed_request',
delete_delayed_request = 'delete_delayed_request',
create_user_mfa_secret = 'create_user_mfa_secret',
create_admin_mfa_secret = 'create_admin_mfa_secret',
update_user_mfa_status = 'update_user_mfa_status',
update_admin_mfa_status = 'update_admin_mfa_status',
verify_user_mfa_token = 'verify_user_mfa_token',
verify_admin_mfa_token = 'verify_admin_mfa_token',
send_test_email = 'send_test_email',
send_test_push = 'send_test_push',
create_kyc_user_data = 'create_kyc_user_data',
update_kyc_user_data = 'update_kyc_user_data',
delete_kyc_user_data = 'delete_kyc_user_data',
create_permission_preset = 'create_permission_preset',
update_permission_preset = 'update_permission_preset',
delete_permission_preset = 'delete_permission_preset',
create_instruments_strategies_schedule = 'create_instruments_strategies_schedule',
update_instruments_strategies_schedule = 'update_instruments_strategies_schedule',
delete_instruments_strategies_schedule = 'delete_instruments_strategies_schedule',
create_currency_price = 'create_currency_price',
update_currency_price = 'update_currency_price',
delete_currency_price = 'delete_currency_price',
set_currency_price = 'set_currency_price',
create_ip_whitelist_items = 'create_ip_whitelist_items',
update_ip_whitelist_item = 'update_ip_whitelist_item',
delete_ip_whitelist_item = 'delete_ip_whitelist_item',
update_hedging_account = 'update_hedging_account',
send_margin_trade_notif = 'send_margin_trade_notif',
create_margin_account_transaction = 'create_margin_account_transaction',
update_admin_properties = 'update_admin_properties',
create_upload = 'create_upload',
complete_upload = 'complete_upload',
update_elliptic_risk_threshold = 'update_elliptic_risk_threshold',
update_scorechain_minimal_risk_score = 'update_scorechain_minimal_risk_score',
update_payment_kyt_status = 'update_payment_kyt_status',
reprocess_kyt_payment = 'reprocess_kyt_payment',
create_instrument_strategy_rule = 'create_instrument_strategy_rule',
update_instrument_strategy_rule = 'update_instrument_strategy_rule',
delete_instrument_strategy_rule = 'delete_instrument_strategy_rule',
create_vault = 'create_vault',
update_vault = 'update_vault',
trigger_vaults_interests_calculation = 'trigger_vaults_interests_calculation',
trigger_vaults_locks_withdrawals = 'trigger_vaults_locks_withdrawals',
trigger_expired_vaults_processing = 'trigger_expired_vaults_processing',
trigger_delayed_vaults_trx_processing = 'trigger_delayed_vaults_trx_processing',
create_vault_withdrawal = 'create_vault_withdrawal',
create_vault_deposit = 'create_vault_deposit',
create_vault_transaction = 'create_vault_transaction',
create_vault_manual_transactions = 'create_vault_manual_transactions',
update_vault_transaction_request = 'update_vault_transaction_request',
cancel_vault_transaction_request = 'cancel_vault_transaction_request',
create_referral = 'create_referral',
claim_referral = 'claim_referral',
calculate_payments_limits = 'calculate_payments_limits',
create_aggregated_payment_limit = 'create_aggregated_payment_limit',
update_aggregated_payment_limit = 'update_aggregated_payment_limit',
delete_aggregated_payment_limit = 'delete_aggregated_payment_limit',
sync_config = 'sync_config',
create_ip_blacklist_item = 'create_ip_blacklist_item',
create_ip_blacklist_items = 'create_ip_blacklist_items',
update_ip_blacklist_item = 'update_ip_blacklist_item',
remove_ip_blacklist_item = 'remove_ip_blacklist_item',
reset_demo_balances = 'reset_demo_balances',
activate_license = 'activate_license',
renew_license = 'renew_license',
create_referral_reward = 'create_referral_reward',
update_referral_reward = 'update_referral_reward',
delete_referral_reward = 'delete_referral_reward',
start_trading_grid = 'start_trading_grid',
stop_trading_grid = 'stop_trading_grid',
update_trading_grid = 'update_trading_grid',
estimate_trading_grid = 'estimate_trading_grid',
user_switch_fee_group = 'user_switch_fee_group',
update_withdrawal_notional_fee = 'update_withdrawal_notional_fee',
create_trade_tier = 'create_trade_tier',
update_trade_tier = 'update_trade_tier',
delete_trade_tier = 'delete_trade_tier',
delete_trades_volume = 'delete_trades_volume',
create_wallet = 'create_wallet'
}

export enum CounterpartyType {
vasp = 'vasp',
unhosted_wallet = 'unhosted_wallet'
}

export enum SyncConfigMode {
merge = 'merge',
replace = 'replace'
}

export enum FxcmFeeGroups {
ZeroCommission = 'ZeroCommission',
RawSpreads = 'RawSpreads',
InstitutionalSpreads = 'InstitutionalSpreads'
}

export enum __TypeKind {
SCALAR = 'SCALAR',
OBJECT = 'OBJECT',
INTERFACE = 'INTERFACE',
UNION = 'UNION',
ENUM = 'ENUM',
INPUT_OBJECT = 'INPUT_OBJECT',
LIST = 'LIST',
NON_NULL = 'NON_NULL'
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
INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION'
}


export interface Log{
name: string;
data?: string;
rrn?: string;
created_at?: string;
created_at_iso: string;
}

export interface String{
String?: string;
}

export interface UserUpdateNotification{
title?: string;
body: string;
class: UserUpdateNotificationClass;
reference_nr?: string;
}

export interface Setting{
name: string;
value?: string;
}

export interface NotificationOptions{
client: NotificationTrigger[];
push: NotificationTrigger[];
email: NotificationTrigger[];
sms: NotificationTrigger[];
}

export interface RegionBlacklistItem{
code: string;
list: BlacklistItem[];
}

export interface BlacklistItem{
code: string;
name?: string;
}

export interface GeoInformation{
area: number;
city: string;
country: string;
eu: string;
ll: number[];
metro: number;
range: number[];
region: string;
timezone: string;
}

export interface Float{
Float?: number;
}

export interface GeoRestrictions{
region_blacklist: RegionBlacklistItem[];
country_blacklist: BlacklistItem[];
}

export interface GeoRestrictionWithCurrentGeo{
region_blacklist: RegionBlacklistItem[];
country_blacklist: BlacklistItem[];
current_geo?: GeoInformation;
}

export interface AuditTrailLog{
serial_id: number;
entity: string;
action: string;
actor_id?: string;
actor_ip?: string;
item_before?: string;
item_after?: string;
action_at: string;
action_at_iso: string;
}

export interface Int{
Int?: number;
}

export interface Order{
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
instrument_strategy_id?: string;
message?: string;
created_at: string;
updated_at: string;
expires_at?: string;
version: number;
parent_order_id?: string;
stop_price?: number;
notes?: string;
user?: User;
trades: Trade[];
instrument?: Instrument;
fees: AccountTransaction[];
total?: number;
created_at_iso: string;
updated_at_iso: string;
expires_at_iso?: string;
}

export interface Currency{
serial_id?: number;
currency_id: string;
type: CurrencyType;
precision: number;
name: string;
is_active: ToggleSwitch;
payment_routes: PaymentRoute[];
rates?: CurrencyPrice;
}

export interface CurrencyPrice{
base_currency_id: string;
quote_currency_id: string;
ask: number;
bid: number;
source: string;
updated_at: string;
}

export interface ClientCustomProperty{
property: string;
value: string;
}

export interface DepositAddressCrypto{
deposit_address_crypto_id: string;
user_id: string;
currency_id: string;
address?: string;
address_tag_type?: CryptoAddressTagType;
address_tag_value?: string;
network?: string;
psp_service_id?: string;
reference?: string;
address_type?: string;
created_at: string;
updated_at: string;
created_at_iso: string;
updated_at_iso: string;
user: User;
}

export interface FavoriteAddressCrypto{
currency_id: string;
address?: string;
address_tag_type?: CryptoAddressTagType;
address_tag_value?: string;
network?: string;
psp_service_id?: string;
name?: string;
network_name?: string;
created_at?: string;
}

export interface FiatDepositProperty{
name: string;
value: string;
}

export interface FavoriteFiatDestination{
name: string;
bank_name?: string;
bank_country?: string;
bank_region?: string;
bank_city?: string;
bank_address?: string;
bank_postal_code?: string;
bank_bic?: string;
bank_swift?: string;
bank_iban?: string;
routing_number?: string;
reference?: string;
notes?: string;
beneficiary_name?: string;
beneficiary_email?: string;
beneficiary_account_number?: string;
beneficiary_country?: string;
beneficiary_region?: string;
beneficiary_city?: string;
beneficiary_address_line_1?: string;
beneficiary_address_line_2?: string;
beneficiary_postal_code?: string;
intermediary_bank_name?: string;
intermediary_iban?: string;
intermediary_country?: string;
intermediary_street_address?: string;
intermediary_city?: string;
intermediary_region?: string;
intermediary_bic?: string;
intermediary_bank_postal_code?: string;
properties: FiatDepositProperty[];
}

export interface User{
serial_id?: number;
user_id: string;
parent_user_id?: string;
integer_tracking_id: number;
username: string;
email?: string;
language?: string;
timezone?: string;
primary_market_currency?: string;
is_active: ToggleSwitch;
is_deleted: ToggleSwitch;
fee_group_id: string;
limit_group_id: string;
created_at: string;
mfa_for_withdraw?: ToggleSwitch;
updated_at: string;
crypto_pay: ToggleSwitch;
password_hash?: string;
version?: number;
kyc_data: KycUserData[];
fee_group: FeeGroup;
limit_group: LimitGroup;
favorite_instruments: string[];
notifications_settings: NotificationTrigger[];
client_custom_properties: ClientCustomProperty[];
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
default_timezone?: ToggleSwitch;
full_name?: string;
anti_phishing_code?: string;
parent_user?: User;
created_at_iso: string;
updated_at_iso?: string;
trading_volumes: UsersTradingVolume[];
role?: Role;
is_referral_claim_available: boolean;
trades_volume: number;
trade_tier: TradeTier;
}

export interface Boolean{
Boolean?: boolean;
}

export interface KycUserData{
user_id: string;
kyc_property: string;
kyc_value: string;
updated_at: string;
}

export interface AdminProperty{
admin_id: string;
name: string;
value: string;
updated_at: string;
}

export interface AdminEventsLog{
action: string;
actor_id?: string;
actor_ip?: string;
context: string;
action_at: string;
ts_iso: string;
}

export interface Admin{
admin_id: string;
name: string;
updated_by?: string;
created_at: string;
updated_at: string;
last_login_at?: string;
password_hash?: string;
last_login_ip?: string;
}

export interface PermissionShare{
user_id: string;
role_id: Role;
subject: string;
shared_by: string;
shared_at: string;
shared_at_iso: string;
}

export interface PermissionPreset{
name: string;
subjects: string[];
created_at: string;
updated_at: string;
created_by: string;
updated_by?: string;
}

export interface CognitoPool{
serial_id?: number;
name: string;
cognito_pool_id: string;
role: Role;
jwks: string;
is_active: ToggleSwitch;
}

export interface AccountTransaction{
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
margin_trade_id?: string;
amount: number;
post_balance: number;
comment?: string;
created_at: string;
created_by?: string;
created_at_iso: string;
currency?: Currency;
notional?: AccountTransactionNotionalValue;
order?: Order;
user?: User;
trade?: Trade;
payment?: Payment;
conversion?: Conversion;
}

export interface Account{
serial_id?: number;
account_id: string;
user_id: string;
currency_id: string;
wallet_id: string;
balance: number;
version: number;
created_at: string;
updated_at: string;
}

export interface Wallet{
serial_id: number;
wallet_id: string;
user_id: string;
name: string;
description?: string;
created_at: string;
}

export interface AccountTransactionNotionalValue{
account_transaction_id: string;
currency_id: string;
amount: number;
}

export interface AccountsResult{
serial_id?: number;
account_id: string;
user_id: string;
currency_id: string;
wallet_id: string;
balance: number;
version: number;
created_at: string;
updated_at: string;
email?: string;
username?: string;
created_at_iso: string;
updated_at_iso: string;
balance_quoted?: number;
}

export interface AccountBalance{
account_id: string;
currency_id: string;
total_balance: number;
exposed_balance: number;
free_balance: number;
currency: Currency;
margin_exposure: number;
free_balance_quoted?: number;
}

export interface ExposureItem{
currency_id: string;
amount: number;
}

export interface HedgingAccount{
serial_id?: number;
hedging_adapter_id: string;
currency_id: string;
balance: number;
usd_threshold: number;
is_active: ToggleSwitch;
usd_balance?: number;
}

export interface HedgingAdapter{
serial_id?: number;
hedging_adapter_id: string;
service_url: string;
service_api_key: string;
broker_user_id: string;
hedging_enabled: ToggleSwitch;
account_balances_sync_enabled: ToggleSwitch;
meta?: string;
created_at: string;
maker_fee?: number;
taker_fee?: number;
fees_sync_enabled: ToggleSwitch;
created_at_iso: string;
}

export interface OrderbookItem{
price: number;
quantity: number;
exchange?: string;
}

export interface OrderbookUpdateResult{
instrument_id: string;
sell: OrderbookItem[];
buy: OrderbookItem[];
ts: string;
total_volume?: number;
best_ask?: number;
best_bid?: number;
ts_iso: string;
}

export interface FeeGroup{
serial_id?: number;
fee_group_id: string;
name?: string;
description?: string;
beneficiary_user_id: string;
kyc_status?: UserKycStatus;
meta?: string;
trading_fees: TradingFee[];
payment_fees: PaymentFee[];
}

export interface PaymentFee{
serial_id?: number;
payment_route_id?: string;
currency_id: string;
fee_group_id: string;
withdrawal_progressive_fee?: number;
withdrawal_flat_fee?: number;
deposit_progressive_fee?: number;
deposit_flat_fee?: number;
calculation_type?: FeeCalculationType;
fee_group: FeeGroup;
payment_route?: PaymentRoute;
}

export interface LimitGroup{
serial_id?: number;
limit_group_id: string;
name?: string;
description?: string;
kyc_status?: UserKycStatus;
meta?: string;
payment_limits: PaymentLimit[];
trading_limits: TradingLimit[];
disabled_instruments: string[];
disabled_currencies: string[];
disabled_payment_routes: string[];
aggregated_payment_limit?: AggregatedPaymentLimit;
}

export interface PaymentLimit{
serial_id?: number;
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
notion_currency?: string;
auto_reject: ToggleSwitch;
limit_group: LimitGroup;
}

export interface TradingLimit{
serial_id?: number;
limit_group_id: string;
instrument_id: string;
daily_limit: number;
weekly_limit: number;
monthly_limit: number;
notion_currency?: string;
limit_group: LimitGroup;
}

export interface InstrumentPrice{
instrument_id: string;
ask?: number;
bid?: number;
price_24h_change?: number;
volume?: number;
ts: string;
bid_volume_l3?: number;
bid_vwap_l3?: number;
bid_volume_l5?: number;
bid_vwap_l5?: number;
ask_volume_l3?: number;
ask_vwap_l3?: number;
ask_volume_l5?: number;
ask_vwap_l5?: number;
ts_iso: string;
}

export interface HedgingOrder{
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
instrument: Instrument;
}

export interface Instrument{
serial_id?: number;
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
meta?: string;
price_bars: InstrumentPriceHistory[];
recent_price_bar?: InstrumentPriceHistory;
base_currency: Currency;
quote_currency: Currency;
trading_fees?: TradingFee;
price?: InstrumentPrice;
volatility: number;
volume_24h?: number;
}

export interface DateRangeInput{
time_from?: string;
time_to?: string;
}

export interface InstrumentPriceHistory{
instrument_id: string;
high: number;
low: number;
open: number;
close: number;
volume_from?: number;
volume_to?: number;
price_24h_change?: number;
ts: string;
ts_iso: string;
}

export interface InstrumentStrategy{
serial_id?: number;
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
hedge_quantity_trigger_buy: number;
hedge_quantity_trigger_sell: number;
hedge_quantity_increment: number;
conversions_balance?: number;
hedging_enabled?: ToggleSwitch;
hedging_order_type?: OrderType;
hedging_order_time_in_force?: OrderTimeInForce;
hedging_order_price?: InstrumentStrategyHedgingOrderPrice;
hedging_order_ttl_ms?: number;
hedging_error_attempts_threshold?: number;
hedging_error_attempts_count?: number;
disable_hedging_on_error_attempts_threshold_exceeded?: ToggleSwitch;
disable_strategy_on_error_attempts_threshold_exceeded?: ToggleSwitch;
instruments_settings_sync_enabled?: ToggleSwitch;
strategy_settings_sync_enabled?: ToggleSwitch;
meta?: string;
error?: string;
updated_at: string;
is_active: ToggleSwitch;
version?: number;
min_spread?: number;
on_min_spread_violation?: OnMinSpreadViolation;
maximum_publish_quantity: number;
updated_at_iso: string;
hedge_balance: number;
}

export interface InstrumentsStrategiesSchedule{
instruments_strategies_schedule_id: string;
serial_id?: number;
instrument_strategy_id: string;
markup_ask: number;
markup_bid: number;
is_active: ToggleSwitch;
time_from_day_of_week: DayOfWeek;
time_from_hours: number;
time_from_minutes: number;
time_to_day_of_week: DayOfWeek;
time_to_hours: number;
time_to_minutes: number;
instrument_strategy?: InstrumentStrategy;
}

export interface InstrumentsStrategiesAlert{
instrument_strategy_id: string;
alert_trigger: InstrumentStrategyAlertTrigger;
alert_message: string;
created_at: string;
resolved_at?: string;
instrument_strategy: InstrumentStrategy;
}

export interface InstrumentStrategyRule{
instrument_strategy_id: string;
is_active: ToggleSwitch;
min_total_volume: number;
min_ask_volume: number;
min_bid_volume: number;
max_spread: number;
max_update_interval: number;
max_violations_before_measures: number;
current_violations: number;
disable_strategy_if_violated: ToggleSwitch;
disable_hedging_if_violated: ToggleSwitch;
instrument_strategy: InstrumentStrategy;
}

export interface Upload{
upload_id: string;
user_id: string;
document_type: UploadDocumentType;
content_type: string;
size: number;
original_name: string;
s3_bucket: string;
s3_etag: string;
s3_key: string;
s3_location?: string;
s3_public_url?: string;
created_at: string;
}

export interface NewUploadResult{
upload_id: string;
upload_url: string;
}

export interface ApiKey{
serial_id: number;
api_key_id: string;
name?: string;
secret_hash: string;
expires_at: string;
created_at: string;
is_active: ToggleSwitch;
type: ApiKeyTypes;
trader_id?: string;
created_by: string;
hmac_required: string;
created_at_iso: string;
expires_at_iso?: string;
permissions: Permission[];
ip_address: string[];
}

export interface CreateApiKeyResult{
api_key_id: string;
expires_at: string;
api_key_secret: string;
}

export interface SignInResult{
jwt: string;
expires_at: number;
}

export interface TimelineEvent{
user_id: string;
event_name: NotificationTrigger;
event_data: string;
created_at: string;
instrument?: Instrument;
}

export interface UserIpGeoHistory{
date_ts: string;
user_id: string;
ip_address: string;
country?: string;
region?: string;
lat: number;
lon: number;
user_agent?: string;
}

export interface UserIpGeoHistoryOverview{
users: number;
country?: string;
region?: string;
lat: number;
lon: number;
}

export interface IpWhitelistItem{
serial_id: number;
ip_address: string;
ip_whitelist_id: string;
email?: string;
note?: string;
updated_at?: string;
created_at: string;
created_at_iso: string;
updated_at_iso: string;
}

export interface TradingFee{
serial_id?: number;
instrument_id: string;
fee_group_id: string;
maker_progressive: number;
taker_progressive: number;
maker_flat: number;
taker_flat: number;
fee_group: FeeGroup;
}

export interface UsersTradingVolume{
user_id: string;
instrument_id: string;
daily_volume: number;
weekly_volume: number;
monthly_volume: number;
last_daily_volume: number;
last_weekly_volume: number;
last_monthly_volume: number;
updated_at: string;
instrument: Instrument;
notion_daily_volume?: number;
notion_weekly_volume?: number;
notion_monthly_volume?: number;
}

export interface Trade{
serial_id: number;
trade_id: string;
trade_session_id: string;
instrument_id: string;
order_id: string;
side?: OrderSide;
counter_order_id: string;
user_id: string;
quantity: number;
price: number;
created_at: string;
quantity_mode: OrderQuantityMode;
created_at_iso: string;
user?: User;
instrument?: Instrument;
order?: Order;
}

export interface AggregatedPaymentLimit{
serial_id?: number;
limit_group_id: string;
currency_id: string;
withdrawal_daily_limit: number;
withdrawal_weekly_limit: number;
withdrawal_monthly_limit: number;
is_active: ToggleSwitch;
limit_group: LimitGroup;
}

export interface KytScreening{
serial_id?: number;
screening_id?: string;
provider: KytProvider;
payment_id: string;
risk_score?: number;
error_message?: string;
analysis_target?: KytAnalysisTarget;
analysed_at: string;
created_at: string;
updated_at: string;
pdf_report_url: string;
evaluation_detail: EllipticEvaluationSource[];
}

export interface EllipticEvaluationSource{
rule_id: string;
rule_name?: string;
risk_score: number;
}

export interface Payment{
payment_id: string;
payment_route_id: string;
remote_txid?: string;
user_id: string;
kyt_status: PaymentKytStatus;
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
status: PaymentStatus;
approval_status: PaymentApprovalStatus;
approval_reason?: string;
approved_by?: string;
kyt_approved_by?: string;
kyt_approval_reason?: string;
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
fees_included: ToggleSwitch;
updated_at: string;
version: number;
amount_quoted?: number;
fee_quoted?: number;
user: User;
created_at_iso: string;
updated_at_iso: string;
approved_at_iso?: string;
estimated_crypto_network_fee?: string;
aml_screening_results?: string;
manual_transaction_date?: string;
internal_transfer_cross_reference?: string;
payment_route?: PaymentRoute;
manual_transaction_date_iso?: string;
account_transactions: AccountTransaction[];
fiat_bank_name?: string;
fiat_bank_address?: string;
fiat_bank_bic?: string;
fiat_beneficiary_name?: string;
fiat_beneficiary_account_number?: string;
fiat_beneficiary_address_line_1?: string;
fiat_beneficiary_address_line_2?: string;
fiat_routing_number?: string;
fiat_reference?: string;
fiat_notes?: string;
fiat_transfer_type?: string;
fiat_bank_country?: string;
fiat_bank_region?: string;
fiat_bank_city?: string;
fiat_bank_postal_code?: string;
fiat_beneficiary_country?: string;
fiat_beneficiary_region?: string;
fiat_beneficiary_city?: string;
fiat_beneficiary_postal_code?: string;
intermediary_bank_name?: string;
intermediary_iban?: string;
intermediary_country?: string;
intermediary_street_address?: string;
intermediary_city?: string;
intermediary_region?: string;
intermediary_bic?: string;
travel_rule_response?: string;
properties: PaymentProperty[];
screenings: KytScreening[];
}

export interface PaymentProperty{
payment_id: string;
name: string;
value?: string;
updated_at: string;
}

export interface PaymentRoute{
serial_id?: number;
payment_route_id: string;
currency_id: string;
psp_service_id: string;
name?: string;
crypto_network?: string;
crypto_address_generate_new?: ToggleSwitch;
crypto_address_tag_type?: CryptoAddressTagType;
fiat_iframe_deposit_url?: string;
fiat_iframe_withdrawal_url?: string;
fiat_transfer_type?: string;
is_active: ToggleSwitch;
extend_network_fee?: ToggleSwitch;
network_fee_currency_id?: string;
is_development?: ToggleSwitch;
verification_type?: VerificationType;
fiat_deposit_properties: FiatDepositProperty[];
deposit_enabled?: ToggleSwitch;
withdrawal_enabled?: ToggleSwitch;
is_crypto_to_fiat?: ToggleSwitch;
meta?: string;
currency: Currency;
psp_balance?: number;
notes?: string;
}

export interface CryptoNetwork{
crypto_network: string;
crypto_network_name: string;
}

export interface ConversionQuotesRisks{
target_currency_amount_unexecuted: number;
source_currency_amount_unexecuted: number;
source_currency_id: string;
target_currency_id: string;
instrument_id: string;
}

export interface ConversionQuote{
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
raw_price?: number;
expires_at_iso: string;
}

export interface Conversion{
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
instrument?: Instrument;
}

export interface EstimateOrderFee{
currency_id: string;
amount: number;
}

export interface CreateConversionQuoteResult{
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

export interface TradesVolume{
serial_id: number;
user_id: string;
volume: number;
created_at: string;
}

export interface TradeTier{
serial_id: number;
tier_id: string;
fee_group_id: string;
name: string;
maker_progressive: number;
taker_progressive: number;
threshold: number;
}

export interface ReferralTransactionInfo{
serial_id?: number;
referral_transaction_id: string;
account_transaction_id?: string;
target_user_id: string;
referral_id: string;
reward_type: ReferralRewardType;
amount: number;
currency_id: string;
is_delayed: ToggleSwitch;
delayed_until?: string;
comment?: string;
created_at: string;
account_transaction: AccountTransaction;
target_user: User;
created_at_iso: string;
}

export interface Webhook{
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

export interface DelayedRequest{
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
approved_at?: string;
created_at_iso: string;
approved_at_iso?: string;
}

export interface LimitsStatusStructure{
limit?: number;
filled?: number;
remaining?: number;
}

export interface LimitsStatusPeriods{
daily: LimitsStatusStructure;
weekly: LimitsStatusStructure;
monthly: LimitsStatusStructure;
}

export interface LimitsStatus{
payments: LimitsStatusPeriods;
aggregated?: LimitsStatusPeriods;
}

export interface EstimateNetworkFeeResultItem{
fee_per_byte?: number;
gas_price?: number;
network_fee?: number;
base_fee?: number;
priority_fee?: number;
gas_limit?: number;
}

export interface EstimateNetworkFeeResult{
low: EstimateNetworkFeeResultItem;
medium: EstimateNetworkFeeResultItem;
high: EstimateNetworkFeeResultItem;
}

export interface EstimateOrderResult{
type: OrderType;
instrument: Instrument;
time_in_force: OrderTimeInForce[];
side: OrderSide;
price: number;
quantity_mode: OrderQuantityMode;
quantity: number;
fees: EstimateOrderFee[];
total: number;
}

export interface Vault{
serial_id?: number;
vault_id: string;
currency_id: string;
name?: string;
annual_rate_percent: number;
max_withdrawal_amount: number;
max_deposit_amount: number;
min_withdrawal_amount: number;
min_deposit_amount: number;
cut_off_time_seconds: number;
lock_in_period_seconds?: number;
effective_date_from: string;
effective_date_to?: string;
rate_type: VaultRateType;
is_active: ToggleSwitch;
withdrawal_enabled: ToggleSwitch;
deposit_enabled: ToggleSwitch;
withdrawal_policy: VaultWithdrawalPolicy;
withdrawal_delay_seconds?: number;
last_interest_at?: string;
created_at: string;
updated_at: string;
meta?: string;
total_balance: number;
currency?: Currency;
effective_date_from_iso: string;
effective_date_to_iso?: string;
created_at_iso: string;
updated_at_iso?: string;
}

export interface VaultTransaction{
serial_id?: number;
vault_id: string;
user_id: string;
vault_transaction_id: string;
vault_account_id: string;
account_transaction_id?: string;
amount: number;
balance_after: number;
currency_id?: string;
transaction_type: AccountTransactionType;
transaction_class: VaultsTransactionClass;
comment?: string;
is_delayed?: ToggleSwitch;
delayed_until?: string;
created_by?: string;
created_at: string;
delayed_until_iso?: string;
vault?: Vault;
user?: User;
created_at_iso: string;
currency?: Currency;
}

export interface VaultAccount{
serial_id: number;
vault_account_id: string;
vault_id: string;
user_id: string;
balance: number;
version: number;
created_at: string;
updated_at: string;
vault?: Vault;
user?: User;
balance_quoted?: number;
created_at_iso: string;
updated_at_iso: string;
}

export interface VaultTransactionRequest{
serial_id?: number;
request_id: string;
user_id: string;
vault_id: string;
transaction_type: AccountTransactionType;
transaction_class: VaultsTransactionClass;
amount: number;
status: VaultTransactionRequestStatus;
approval_reason?: string;
approved_by?: string;
approved_at?: string;
created_at: string;
updated_at: string;
username: string;
vault: Vault;
created_at_iso: string;
updated_at_iso: string;
approved_at_iso?: string;
}

export interface Referral{
serial_id: number;
referral_id: string;
user_id?: string;
created_at: string;
}

export interface ReferralHistory{
serial_id?: number;
referral_id: string;
parent_user_id: string;
child_user_id: string;
created_at: string;
child_user: User;
parent_user: User;
created_at_iso: string;
}

export interface ReferralReward{
serial_id?: number;
is_active: ToggleSwitch;
type: ReferralRewardType;
meta: string;
min_deposited_volume_required: ToggleSwitch;
min_deposited_volume: number;
min_deposited_volume_currency_id?: string;
kyc_required: ToggleSwitch;
is_delayed: ToggleSwitch;
delayed_period_seconds?: number;
min_staked_vault_required: ToggleSwitch;
min_staked_vault_volume?: number;
min_staked_vault_currency_id?: string;
created_at: string;
updated_at: string;
created_at_iso: string;
updated_at_iso: string;
}

export interface CashHoldingsReport{
serial_id: number;
type: string;
transaction_class: string;
user_id: string;
wallet_id: string;
currency_id: string;
amount: number;
post_balance: number;
note?: string;
created_at?: string;
}

export interface TradingGrid{
serial_id?: number;
trading_grid_id: string;
user_id: string;
instrument_id: string;
initial_investment_quote_currency: number;
initial_buy_quantity_base_currency: number;
level_quantity_base_currency: number;
mode: TradginGridMode;
size: number;
start_price: number;
price_range_from: number;
price_range_to: number;
stop_loss_percentage?: number;
take_profit_percentage?: number;
collateral_reserve_order_id?: string;
collateral_release_order_id?: string;
reserved_fees_quote_currency: number;
reserved_fees_base_currency: number;
pnl_quote_currency: number;
status: TradingGridStatus;
status_message?: string;
created_at: string;
updated_at: string;
version: number;
}

export interface TradingGridLevel{
serial_id: number;
trading_grid_level_id: string;
trading_grid_id: string;
instrument_id: string;
level: number;
level_price: number;
buy_price: number;
sell_price: number;
quantity: number;
sell_order_id?: string;
buy_order_id?: string;
status: TradingGridLevelStatus;
status_message?: string;
completed_orders: number;
created_at: string;
updated_at: string;
version: number;
}

export interface Country{
name: string;
code: string;
phone_code: string;
}

export interface Province{
country_code: string;
province_code: string;
iso_region?: string;
full_name: string;
short_name: string;
Type: string;
}

export interface CreateUserMfaSecretResult{
secret: string;
uri: string;
qr: string;
}

export interface IpBlacklistItem{
ip_address: string;
updated_at: string;
reason?: string;
updated_at_iso: string;
}

export interface HealthcheckResult{
maintenance_message?: string;
maintenance_mode?: boolean;
}

export interface SsoSettingsItem{
domain: string;
client_id: string;
type: string;
pool_id?: string;
}

export interface SsoSettingsResult{
admin: SsoSettingsItem;
trader: SsoSettingsItem;
trader_mobile: SsoSettingsItem;
}

export interface ConversionsSummaryReportItem{
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

export interface OrdersSummaryReportItem{
instrument_id: string;
side: OrderSide;
quantity_mode: OrderQuantityMode;
trades_count: number;
executed_quantity: number;
date_ts: string;
date_ts_iso: string;
}

export interface AccountsPortfolioReportItem{
currency_id: string;
balance: number;
}

export interface LiquidityReportBrokerAccountBalanceReportItem{
currency_id: string;
total_balance: number;
exposed_balance: number;
free_balance: number;
adapter: HedgingAdapter;
}

export interface LiquidityReportPaymentRouteReportItem{
psp_service_id: string;
currency_id: string;
crypto_network?: string;
vault_id?: string;
total_balance: number;
psp_balance_updated_at_iso?: string;
psp_balance?: number;
psp_balance_updated_at?: string;
psp_vault_name?: string;
}

export interface LiquidityReportStrategyHedgingBalanceReportItem{
hedging_adapter_id: string;
instrument_id: string;
markup_ask: number;
markup_bid: number;
hedge_quantity_trigger_buy: number;
hedge_quantity_trigger_sell: number;
hedge_quantity_increment: number;
error?: string;
is_active: ToggleSwitch;
hedge_balance?: number;
}

export interface FireblocksRollingLimits{
threshold: number;
tally: number;
timespan_ms: number;
}

export interface LiquidityReportResult{
broker: LiquidityReportBrokerAccountBalanceReportItem[];
payments: LiquidityReportPaymentRouteReportItem[];
hedging: LiquidityReportStrategyHedgingBalanceReportItem[];
accounts: AccountsPortfolioReportItem[];
fireblocks_rolling_limits?: FireblocksRollingLimits;
}

export interface TotalHedgeBalanceItem{
instrument_id: string;
hedging_adapter_id: string;
hedge_balance?: number;
}

export interface OpenExposureReportResult{
base_currency_id: string;
quote_currency_id: string;
total_hedge_balance: number;
total_hedge_balance_items: TotalHedgeBalanceItem[];
}

export interface DailyBalancesReportItem{
timestamp: number;
balanceInBaseCurrency: number;
}

export interface ProductsEnabled{
derivatives: string;
vaults: string;
referrals: string;
}

export interface FiatDepositDetails{
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

export interface KycPreference{
provider?: KycProvider;
provider_url?: string;
provider_env?: KycProviderEnv;
provider_secret_key: string;
enabled: boolean;
}

export interface KycPreferences{
individual?: KycPreference;
corporate?: KycPreference;
}

export interface Vasp{
id: string;
name: string;
}

export interface CreateAccountTransactionResult{
parent_transaction_id: string;
account_transactions: AccountTransaction[];
}

export interface UserUpdateResult{
account_transaction?: AccountTransaction;
account?: Account;
order?: Order;
payment?: Payment;
conversion?: Conversion;
notification?: UserUpdateNotification;
healthcheck?: HealthcheckResult;
}

export interface PushToken{
platform: Platform;
token: string;
}

export interface AmlScreeningCluster{
name: string;
category: string;
}

export interface AmlScreeningChainAnalysisPayload{
asset?: string;
rating?: string;
address?: string;
cluster?: AmlScreeningCluster;
customAddress?: string;
chainalysisIdentification?: string;
}

export interface AmlScreeningChainAnalysis{
provider: string;
payload?: AmlScreeningChainAnalysisPayload;
screeningStatus: string;
timestamp: number;
}

export interface AmlScreeningResult{
chainanalysis?: AmlScreeningChainAnalysis;
}

export interface MarginUserFreeBalanceItem{
user_id: string;
free_balance: number;
}

export interface GeoData{
country?: string;
region?: string;
lat?: number;
lon?: number;
}

export interface WhoAmIResult{
user_id: string;
role: string;
ip: string;
sub: string;
email?: string;
username?: string;
first_name?: string;
last_name?: string;
geo?: GeoData;
}

export interface Summary{
equity?: number;
equity_change?: number;
profit?: number;
number_of_trades?: number;
trades_volume?: number;
deposits_volume?: number;
withdrawals_volume?: number;
fees_volume?: number;
}

export interface UnifiedTransaction{
fee?: string;
date?: string;
lp_id?: string;
price?: string;
to_id?: string;
amount?: string;
source?: string;
status?: string;
comment?: string;
from_id?: string;
hash_id?: string;
to_type?: string;
currency?: string;
order_id?: string;
position?: string;
trade_id?: string;
from_type?: string;
source_id?: string;
sync_time?: string;
timestamp?: string;
usd_price?: string;
fee_in_usd?: string;
fetched_at?: string;
update_time?: string;
fee_currency?: string;
amount_in_usd?: string;
error_message?: string;
exchange_name?: string;
secondary_type?: string;
exchange_account?: string;
transaction_type?: string;
lp_transaction_type?: string;
additional_context?: string;
}

export interface LicenseStatus{
isValid: boolean;
validUntil?: string;
}

export interface RequiredActions{
users?: number;
payments?: number;
}

export interface TradeDetails{
timestamp: DateTime;
price: number;
type: OrderSide;
level: number;
profit: number;
}

export interface DateTime{
DateTime?: DateTime;
}

export interface SimulationDetails{
trades: TradeDetails[];
}

export interface EstimateTradingGridResult{
total_profit: number;
profit_percentage: number;
floating_pnl: number;
annualized_yield: number;
simulation_details: SimulationDetails;
}

export interface FxcmFeesConfigType{
withdrawalFeePercentage: number;
withdrawalMinNotional: number;
rebates: RebateStructure[];
comissions: FxcmFees;
spreads: FxcmFees;
}

export interface FxcmFees{
FxcmFees?: FxcmFees;
}

export interface RebateStructure{
notional_level: number;
rebate: number;
}

export interface RegionBlacklistItemInput{
code: string;
list: BlacklistItemInput[];
}

export interface BlacklistItemInput{
code: string;
name?: string;
}

export interface FiatDepositPropertyInput{
name: string;
value: string;
}

export interface PaymentPropertyInput{
payment_id: string;
name: string;
value?: string;
updated_at: string;
}

export interface FiatDepositDetailsInput{
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

export interface KycPreferenceInput{
provider?: KycProvider;
provider_url?: string;
type?: KycType;
provider_env?: KycProviderEnv;
provider_secret_key: string;
enabled: boolean;
}


export type QueryType = 'version'|'open_orders'|'closed_orders'|'estimate_order'|'trades'|'sso_settings'|'healthcheck'|'admins'|'instruments'|'instrument_price_bars'|'currencies'|'payments'|'deposit_address_crypto'|'deposit_addresses_crypto'|'conversions'|'conversion_quotes'|'conversion_quotes_risks'|'users'|'total_users'|'user'|'account_transactions'|'accounts_balances'|'accounts'|'limits_groups'|'fees_groups'|'payments_fees'|'trading_fees'|'payments_routes'|'crypto_networks'|'psp_services'|'payments_limits'|'api_keys'|'cognito_pools'|'instruments_strategies'|'hedging_orders'|'system_settings'|'notification_settings'|'default_notifications'|'delayed_mutations'|'geo_restrictions'|'trader_mfa_provider'|'admin_mfa_provider'|'is_margin_trading_enabled'|'products_enabled'|'user_products_enabled'|'accounts_portfolio_report'|'orders_summary_report'|'conversions_summary_report'|'liquidity_report'|'daily_balances_report'|'open_exposure_report'|'permissions'|'permissions_subjects'|'all_permission_subjects'|'permissions_share'|'kyc_preferences'|'vasps_list'|'webhooks'|'hedging_adapter_ids'|'hedging_adapters'|'timeline'|'trading_limits'|'trading_volumes'|'countries'|'provinces'|'delayed_requests'|'kyc_user_data'|'permission_presets'|'instruments_strategies_schedule'|'currencies_prices'|'currency_prices'|'convert_currency_amount'|'ip_whitelist'|'hedging_accounts'|'margin_account_transactions'|'margin_users_free_balances'|'admin_properties'|'admin_mfa_status'|'elliptic_screenings'|'elliptic_risk_threshold'|'scorechain_screenings'|'scorechain_minimal_risk_score'|'instruments_strategies_rules'|'instruments_strategies_alerts'|'vaults'|'vaults_average_user_apy'|'estimate_vault_interests'|'vaults_accounts'|'vaults_total_user_balance_quoted'|'vaults_transactions'|'portfolio_history'|'profits_dashboard'|'conversions_dashboard'|'volume_dashboard'|'deposits_dashboard'|'withdrawals_dashboard'|'summary_dashboard'|'unified_transactions'|'unified_transactions_lps'|'vaults_transactions_requests'|'referrals'|'aggregated_payments_limits'|'audit_trail_log'|'my_audit_trail_log'|'admin_events_log'|'referrals_history'|'referred_users_count'|'referrer_total_reward_quoted'|'blacklist_items'|'system_logs'|'whoami'|'referrals_transactions_info'|'license'|'referral_rewards'|'required_actions'|'trading_grids'|'trading_grid_levels'|'user_fees_config'|'estimate_payment_notional_fee'|'cash_holdings_report'|'trade_tiers'|'trade_volumes'|'wallets'|'user_ip_geo_history'|'user_ip_geo_history_overview'|'user_ip_geo_history_detail'

export interface PagerInput{
limit?: number;
offset?: number;
}

export interface SortInput{
direction?: SortDirection;
property?: string;
}

export interface SerialIdRangeInput{
serial_id_from?: number;
serial_id_to?: number;
}


export type MutationType = 'restart_system'|'create_order'|'update_open_order'|'cancel_multiple_orders'|'cancel_order'|'cancel_all_orders'|'service_signin'|'checkin'|'checkout'|'restrictions_check'|'register_trader_local'|'trader_signin_local'|'create_admins'|'delete_admin'|'admin_signin_local'|'create_local_admin'|'create_instrument'|'update_instrument'|'delete_instrument'|'fill_instrument'|'create_currency'|'update_currency'|'delete_currency'|'validate_address_crypto'|'reprocess_payment'|'update_payment_approval_status'|'create_withdrawal_crypto'|'create_withdrawal_fiat'|'create_payment_manual'|'create_conversion_order'|'create_conversion_quote'|'update_user_fee_group'|'update_user_limit_group'|'delete_user'|'add_push_token'|'clear_push_tokens'|'change_user_password'|'update_user_password'|'update_user'|'create_user'|'update_anti_phishing_code'|'create_account_transaction'|'create_limit_group'|'update_limit_group'|'delete_limit_group'|'create_fee_group'|'update_fee_group'|'delete_fee_group'|'estimate_payment_fee'|'estimate_network_fee'|'update_payment_fee'|'create_trading_fee'|'update_trading_fee'|'delete_trading_fee'|'create_payment_session'|'create_payment_route'|'delete_payment_route'|'update_payment_route'|'create_payment_limit'|'update_payment_limit'|'delete_payment_limit'|'create_api_key'|'update_api_key'|'delete_api_key'|'update_service_api_key'|'create_cognito_pool'|'update_cognito_pool'|'delete_cognito_pool'|'create_instrument_strategy'|'update_instrument_strategy'|'update_instrument_strategy_hedge_balance'|'operate_instrument_strategy_hedge_balance'|'delete_instrument_strategy'|'trigger_create_hedging_remote_order_job'|'trigger_complete_hedging_remote_order_job'|'trigger_reject_hedging_remote_order_job'|'update_system_setting'|'update_system_settings'|'update_maintenance_mode'|'update_notifications_settings'|'update_default_notifications'|'update_delayed_mutations'|'update_geo_restrictions'|'update_admin_permissions'|'create_kyc_manual_request'|'create_kyc_session'|'update_kyc_preferences'|'create_webhook'|'update_webhook'|'delete_webhook'|'emit_event'|'create_hedging_adapter'|'update_hedging_adapter'|'delete_hedging_adapter'|'create_trading_limit'|'update_trading_limit'|'delete_trading_limit'|'update_delayed_request'|'delete_delayed_request'|'create_user_mfa_secret'|'create_admin_mfa_secret'|'update_user_mfa_status'|'update_admin_mfa_status'|'verify_user_mfa_token'|'verify_admin_mfa_token'|'send_test_email'|'send_test_push'|'create_kyc_user_data'|'update_kyc_user_data'|'delete_kyc_user_data'|'create_permission_preset'|'update_permission_preset'|'delete_permission_preset'|'create_instruments_strategies_schedule'|'update_instruments_strategies_schedule'|'delete_instruments_strategies_schedule'|'create_currency_price'|'update_currency_price'|'delete_currency_price'|'set_currency_price'|'create_ip_whitelist_items'|'update_ip_whitelist_item'|'delete_ip_whitelist_item'|'update_hedging_account'|'send_margin_trade_notif'|'create_margin_account_transaction'|'update_admin_properties'|'create_upload'|'complete_upload'|'update_elliptic_risk_threshold'|'update_scorechain_minimal_risk_score'|'update_payment_kyt_status'|'reprocess_kyt_payment'|'create_instrument_strategy_rule'|'update_instrument_strategy_rule'|'delete_instrument_strategy_rule'|'create_vault'|'update_vault'|'trigger_vaults_interests_calculation'|'trigger_vaults_locks_withdrawals'|'trigger_expired_vaults_processing'|'trigger_delayed_vaults_trx_processing'|'create_vault_withdrawal'|'create_vault_deposit'|'create_vault_transaction'|'create_vault_manual_transactions'|'update_vault_transaction_request'|'cancel_vault_transaction_request'|'create_referral'|'claim_referral'|'calculate_payments_limits'|'create_aggregated_payment_limit'|'update_aggregated_payment_limit'|'delete_aggregated_payment_limit'|'sync_config'|'create_ip_blacklist_item'|'create_ip_blacklist_items'|'update_ip_blacklist_item'|'remove_ip_blacklist_item'|'reset_demo_balances'|'activate_license'|'renew_license'|'create_referral_reward'|'update_referral_reward'|'delete_referral_reward'|'start_trading_grid'|'stop_trading_grid'|'update_trading_grid'|'estimate_trading_grid'|'user_switch_fee_group'|'update_withdrawal_notional_fee'|'create_trade_tier'|'update_trade_tier'|'delete_trade_tier'|'delete_trades_volume'|'create_wallet'

export interface TravelRulePropertiesArgs{
counterparty: TravelRuleCounterParty;
}

export interface TravelRuleCounterParty{
fullName: string;
crypto_address: string;
counterparty_type: CounterpartyType;
vasp_name?: string;
vasp_code?: string;
}

export interface FavoriteAddressCryptoItem{
currency_id: string;
address?: string;
address_tag_type?: CryptoAddressTagType;
address_tag_value?: string;
network?: string;
psp_service_id?: string;
name?: string;
network_name?: string;
}

export interface FavoriteFiatDestinationItem{
name: string;
bank_name?: string;
bank_country?: string;
bank_region?: string;
bank_city?: string;
bank_address?: string;
bank_postal_code?: string;
bank_bic?: string;
bank_swift?: string;
bank_iban?: string;
routing_number?: string;
reference?: string;
notes?: string;
beneficiary_name?: string;
beneficiary_email?: string;
beneficiary_account_number?: string;
beneficiary_country?: string;
beneficiary_region?: string;
beneficiary_city?: string;
beneficiary_address_line_1?: string;
beneficiary_address_line_2?: string;
beneficiary_postal_code?: string;
intermediary_bank_name?: string;
intermediary_iban?: string;
intermediary_country?: string;
intermediary_street_address?: string;
intermediary_city?: string;
intermediary_region?: string;
intermediary_bic?: string;
intermediary_bank_postal_code?: string;
properties: FiatDepositPropertyInput[];
}

export interface ClientCustomPropertyItem{
property: string;
value: string;
}

export interface NotificationOptionsArgs{
client: NotificationTrigger[];
push: NotificationTrigger[];
email: NotificationTrigger[];
sms: NotificationTrigger[];
}

export interface RecordTransactionItem{
account_transaction_id?: string;
user_id: string;
currency_id: string;
wallet_id: string;
type: AccountTransactionType;
transaction_class: AccountTransactionClass;
amount: number;
client_transaction_id?: string;
comment?: string;
trade_id?: string;
order_id?: string;
payment_id?: string;
conversion_id?: string;
margin_trade_id?: string;
}

export interface CreateAggregatedPaymentLimitArgs{
currency_id: string;
withdrawal_daily_limit: number;
withdrawal_weekly_limit: number;
withdrawal_monthly_limit: number;
is_active: ToggleSwitch;
}

export interface UpdateAggregatedPaymentLimitArgs{
serial_ids: number[];
withdrawal_daily_limit?: number;
withdrawal_weekly_limit?: number;
withdrawal_monthly_limit?: number;
currency_id?: string;
is_active?: ToggleSwitch;
}

export interface SettingItem{
name: string;
value: string;
}

export interface KycUserDataEntryInput{
kyc_property: string;
kyc_value: string;
}

export interface UpdateAdminPropertyInput{
name: string;
value: string;
}

export interface CreateVaultTransactionInput{
vault_id: string;
user_id: string;
account_transaction_id?: string;
amount: number;
transaction_type: AccountTransactionType;
transaction_class: VaultsTransactionClass;
comment?: string;
}

export interface Subscription{
all_orders: Order;
orderbook: OrderbookUpdateResult;
instrument_price: InstrumentPrice;
instrument_price_bar: InstrumentPriceHistory;
user_update: UserUpdateResult;
currency_prices: CurrencyPrice[];
users_free_balances_updates: MarginUserFreeBalanceItem[];
}

export interface __Schema{
description?: string;
types: __Type[];
queryType: __Type;
mutationType?: __Type;
subscriptionType?: __Type;
directives: __Directive[];
}

export interface __Type{
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
isOneOf?: boolean;
}

export interface __Field{
name: string;
description?: string;
args: __InputValue[];
type: __Type;
isDeprecated: boolean;
deprecationReason?: string;
}

export interface __InputValue{
name: string;
description?: string;
type: __Type;
defaultValue?: string;
isDeprecated: boolean;
deprecationReason?: string;
}

export interface __EnumValue{
name: string;
description?: string;
isDeprecated: boolean;
deprecationReason?: string;
}

export interface __Directive{
name: string;
description?: string;
isRepeatable: boolean;
locations: __DirectiveLocation[];
args: __InputValue[];
}


export interface RestartSystemArgs{
}

export interface CreateOrderArgs{
user_id?: string;
wallet_id?: string;
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
post_only?: ToggleSwitch;
}

export interface UpdateOpenOrderArgs{
user_id?: string;
order_id: string;
quantity: number;
price: number;
expires_at?: string;
}

export interface CancelMultipleOrdersArgs{
order_ids: string[];
message?: string;
}

export interface CancelOrderArgs{
user_id?: string;
order_id: string;
message?: string;
}

export interface CancelAllOrdersArgs{
user_id?: string;
}

export interface ServiceSigninArgs{
service_api_key: string;
service_api_secret: string;
}

export interface CheckinArgs{
}

export interface CheckoutArgs{
}

export interface RestrictionsCheckArgs{
}

export interface RegisterTraderLocalArgs{
email: string;
password: string;
first_name: string;
last_name: string;
}

export interface TraderSigninLocalArgs{
email: string;
password: string;
}

export interface CreateAdminsArgs{
emails: string[];
subjects: string[];
}

export interface DeleteAdminArgs{
name: string;
}

export interface AdminSigninLocalArgs{
email: string;
password: string;
}

export interface CreateLocalAdminArgs{
email: string;
password: string;
subjects: string[];
}

export interface CreateInstrumentArgs{
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
meta?: string;
}

export interface UpdateInstrumentArgs{
name?: string;
instrument_id?: string;
base_currency_id?: string;
quote_currency_id?: string;
price_decimals?: number;
quantity_decimals?: number;
quote_quantity_decimals?: number;
min_quantity?: number;
max_quantity?: number;
min_quote_quantity?: number;
max_quote_quantity?: number;
is_active?: ToggleSwitch;
meta?: string;
max_conversion_quote_ttl?: number;
price_collar?: number;
serial_ids: number[];
}

export interface DeleteInstrumentArgs{
serial_id?: number;
serial_ids: number[];
}

export interface FillInstrumentArgs{
instrument: string;
dateTo: string;
limit: number;
periodicity: InstrumentHistoryPeriodicity;
}

export interface CreateCurrencyArgs{
currency_id: string;
type: CurrencyType;
precision: number;
name?: string;
is_active: ToggleSwitch;
}

export interface UpdateCurrencyArgs{
type?: CurrencyType;
precision?: number;
name?: string;
is_active?: ToggleSwitch;
currency_id?: string;
serial_ids: number[];
}

export interface DeleteCurrencyArgs{
currency_id: string;
}

export interface ValidateAddressCryptoArgs{
currency_id: string;
crypto_address: string;
crypto_network?: string;
}

export interface ReprocessPaymentArgs{
status?: PaymentStatus;
approval_status?: PaymentApprovalStatus;
approval_reason?: string;
message?: string;
error_message?: string;
payment_id: string;
trigger_auto_approval?: ToggleSwitch;
}

export interface UpdatePaymentApprovalStatusArgs{
payment_id: string;
approval_status: PaymentApprovalStatus;
approval_reason?: string;
}

export interface CreateWithdrawalCryptoArgs{
user_id?: string;
payment_route_id?: string;
currency_id?: string;
psp_service_id?: string;
crypto_network?: string;
amount: number;
crypto_address: string;
crypto_address_tag_type?: CryptoAddressTagType;
crypto_address_tag_value?: string;
crypto_network_fee_preference?: CryptoNetworkFeePreference;
reference?: string;
mfa_token?: string;
fees_included?: ToggleSwitch;
skip_address_validation?: boolean;
bank_id_session?: string;
travel_rule_properties?: TravelRulePropertiesArgs;
}

export interface CreateWithdrawalFiatArgs{
user_id?: string;
amount: number;
payment_route_id?: string;
currency_id?: string;
psp_service_id?: string;
mfa_token?: string;
properties?: FiatDepositPropertyInput[];
}

export interface CreatePaymentManualArgs{
payment_route_id: string;
remote_txid?: string;
user_id: string;
amount: number;
type: PaymentType;
body_amount?: number;
message?: string;
reference?: string;
create_account_operations?: boolean;
manual_transaction_date?: string;
properties?: FiatDepositPropertyInput[];
status?: PaymentStatus;
approval_status?: PaymentApprovalStatus;
}

export interface CreateConversionOrderArgs{
user_id?: string;
conversion_quote_id: string;
reference?: string;
source_currency_amount?: number;
target_currency_amount?: number;
return_on_complete?: boolean;
wallet_id?: string;
}

export interface CreateConversionQuoteArgs{
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

export interface UpdateUserFeeGroupArgs{
user_id: string;
fee_group_id: string;
reason?: string;
}

export interface UpdateUserLimitGroupArgs{
user_id: string;
limit_group_id: string;
reason?: string;
}

export interface DeleteUserArgs{
}

export interface AddPushTokenArgs{
platform?: Platform;
token?: string;
}

export interface ClearPushTokensArgs{
}

export interface ChangeUserPasswordArgs{
previous_password: string;
proposed_password: string;
}

export interface UpdateUserPasswordArgs{
user_id: string;
password: string;
}

export interface UpdateUserArgs{
parent_user_id?: string;
username?: string;
email?: string;
language?: string;
timezone?: string;
primary_market_currency?: string;
is_active?: ToggleSwitch;
mfa_for_withdraw?: ToggleSwitch;
updated_at?: string;
crypto_pay?: ToggleSwitch;
user_id?: string;
favorite_instruments: string[];
favorite_addresses_crypto: FavoriteAddressCryptoItem[];
favorite_fiat_destinations: FavoriteFiatDestinationItem[];
notifications_settings: NotificationTrigger[];
client_custom_properties: ClientCustomPropertyItem[];
notifications_options?: NotificationOptionsArgs;
mfa_token?: string;
mfa_status?: ToggleSwitch;
full_name?: string;
default_timezone?: ToggleSwitch;
client_user_id?: string;
permissions: Permission[];
}

export interface CreateUserArgs{
user_id?: string;
parent_user_id?: string;
email?: string;
language?: string;
timezone?: string;
primary_market_currency?: string;
fee_group_id?: string;
limit_group_id?: string;
crypto_pay?: ToggleSwitch;
username: string;
cognito_registration?: ToggleSwitch;
cognito_email?: ToggleSwitch;
permissions: Permission[];
mfa_secret?: string;
first_name?: string;
last_name?: string;
password?: string;
password_hash?: string;
client_user_id?: string;
client_custom_properties: ClientCustomPropertyItem[];
}

export interface UpdateAntiPhishingCodeArgs{
anti_phishing_code: string;
token: string;
}

export interface CreateAccountTransactionArgs{
items: RecordTransactionItem[];
}

export interface CreateLimitGroupArgs{
name?: string;
description?: string;
kyc_status?: UserKycStatus;
meta?: string;
limit_group_id?: string;
disabled_currencies: string[];
disabled_instruments: string[];
disabled_payment_routes: string[];
aggregated_payment_limit?: CreateAggregatedPaymentLimitArgs;
}

export interface UpdateLimitGroupArgs{
name?: string;
description?: string;
kyc_status?: UserKycStatus;
meta?: string;
limit_group_id?: string;
serial_ids: number[];
disabled_currencies: string[];
disabled_payment_routes: string[];
disabled_instruments: string[];
aggregated_payment_limit?: UpdateAggregatedPaymentLimitArgs;
}

export interface DeleteLimitGroupArgs{
serial_id?: number;
serial_ids: number[];
}

export interface CreateFeeGroupArgs{
name?: string;
description?: string;
kyc_status?: UserKycStatus;
meta?: string;
beneficiary_user_id?: string;
fee_group_id?: string;
}

export interface UpdateFeeGroupArgs{
name?: string;
description?: string;
beneficiary_user_id?: string;
kyc_status?: UserKycStatus;
meta?: string;
fee_group_id?: string;
serial_ids: number[];
}

export interface DeleteFeeGroupArgs{
serial_id?: number;
serial_ids: number[];
}

export interface EstimatePaymentFeeArgs{
user_id?: string;
payment_route_id?: string;
currency_id?: string;
psp_service_id?: string;
crypto_network?: string;
type: PaymentType;
amount: number;
crypto_network_fee_preference?: CryptoNetworkFeePreference;
crypto_address?: string;
crypto_address_tag_type?: CryptoAddressTagType;
crypto_address_tag_value?: string;
}

export interface EstimateNetworkFeeArgs{
currency_id: string;
network?: string;
psp_service_id?: string;
amount?: number;
crypto_address?: string;
crypto_address_tag_type?: CryptoAddressTagType;
crypto_address_tag_value?: string;
}

export interface UpdatePaymentFeeArgs{
currency_id?: string;
fee_group_id?: string;
withdrawal_progressive_fee?: number;
withdrawal_flat_fee?: number;
deposit_progressive_fee?: number;
deposit_flat_fee?: number;
payment_route_id?: string;
fiat_transfer_type?: string;
crypto_network?: string;
calculation_type?: FeeCalculationType;
serial_id?: number;
serial_ids: number[];
}

export interface CreateTradingFeeArgs{
instrument_id: string;
fee_group_id: string;
maker_progressive: number;
taker_progressive: number;
maker_flat: number;
taker_flat: number;
}

export interface UpdateTradingFeeArgs{
serial_id?: number;
maker_progressive?: number;
taker_progressive?: number;
maker_flat?: number;
taker_flat?: number;
instrument_id?: string;
fee_group_id?: string;
serial_ids: number[];
}

export interface DeleteTradingFeeArgs{
serial_id?: number;
serial_ids: number[];
instrument_id?: string;
fee_group_id?: string;
}

export interface CreatePaymentSessionArgs{
payment_route_id: string;
payment_type: PaymentType;
mfa_token?: string;
}

export interface CreatePaymentRouteArgs{
currency_id: string;
psp_service_id: string;
name?: string;
crypto_network?: string;
crypto_address_generate_new?: ToggleSwitch;
crypto_address_tag_type?: CryptoAddressTagType;
fiat_iframe_deposit_url?: string;
fiat_iframe_withdrawal_url?: string;
fiat_transfer_type?: string;
is_active: ToggleSwitch;
extend_network_fee?: ToggleSwitch;
network_fee_currency_id?: string;
is_development?: ToggleSwitch;
verification_type?: VerificationType;
fiat_deposit_properties: FiatDepositPropertyInput[];
deposit_enabled?: ToggleSwitch;
withdrawal_enabled?: ToggleSwitch;
is_crypto_to_fiat?: ToggleSwitch;
meta?: string;
}

export interface DeletePaymentRouteArgs{
payment_route_id: string;
}

export interface UpdatePaymentRouteArgs{
currency_id?: string;
psp_service_id?: string;
name?: string;
crypto_network?: string;
crypto_address_tag_type?: CryptoAddressTagType;
fiat_iframe_deposit_url?: string;
fiat_iframe_withdrawal_url?: string;
fiat_transfer_type?: string;
is_active?: ToggleSwitch;
network_fee_currency_id?: string;
fiat_deposit_properties: FiatDepositPropertyInput[];
is_crypto_to_fiat?: ToggleSwitch;
meta?: string;
payment_route_id?: string;
serial_ids: number[];
crypto_address_generate_new?: ToggleSwitch;
verification_type?: VerificationType;
extend_network_fee?: ToggleSwitch;
is_development?: ToggleSwitch;
withdrawal_enabled?: ToggleSwitch;
deposit_enabled?: ToggleSwitch;
}

export interface CreatePaymentLimitArgs{
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
auto_reject: ToggleSwitch;
}

export interface UpdatePaymentLimitArgs{
limit_group_id?: string;
currency_id?: string;
deposit_enabled?: ToggleSwitch;
deposit_min_amount?: number;
deposit_auto_approval_amount?: number;
withdrawal_enabled?: ToggleSwitch;
withdrawal_min_amount?: number;
withdrawal_auto_approval_amount?: number;
notion_currency?: string;
deposit_daily_limit?: number;
deposit_weekly_limit?: number;
deposit_monthly_limit?: number;
withdrawal_daily_limit?: number;
withdrawal_weekly_limit?: number;
withdrawal_monthly_limit?: number;
serial_ids: number[];
auto_reject?: ToggleSwitch;
}

export interface DeletePaymentLimitArgs{
serial_id?: number;
serial_ids: number[];
}

export interface CreateApiKeyArgs{
name?: string;
expires_at: string;
is_active: ToggleSwitch;
type: ApiKeyTypes;
user_id?: string;
ip_address: string[];
permissions: Permission[];
}

export interface UpdateApiKeyArgs{
name?: string;
expires_at?: string;
is_active?: ToggleSwitch;
user_id?: string;
api_key_id: string;
ip_address: string[];
permissions: Permission[];
}

export interface DeleteApiKeyArgs{
api_key_id: string;
user_id?: string;
}

export interface UpdateServiceApiKeyArgs{
}

export interface CreateCognitoPoolArgs{
cognito_pool_id: string;
role: Role;
jwks: string;
name?: string;
is_active?: ToggleSwitch;
}

export interface UpdateCognitoPoolArgs{
name?: string;
role?: Role;
jwks?: string;
is_active?: ToggleSwitch;
cognito_pool_id: string;
}

export interface DeleteCognitoPoolArgs{
cognito_pool_id?: string;
multiple_pool_ids: string[];
}

export interface CreateInstrumentStrategyArgs{
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
hedge_quantity_trigger_buy: number;
hedge_quantity_trigger_sell: number;
hedge_quantity_increment: number;
conversions_balance?: number;
hedging_enabled?: ToggleSwitch;
hedging_order_type?: OrderType;
hedging_order_time_in_force?: OrderTimeInForce;
hedging_order_price?: InstrumentStrategyHedgingOrderPrice;
hedging_order_ttl_ms?: number;
hedging_error_attempts_threshold?: number;
hedging_error_attempts_count?: number;
disable_hedging_on_error_attempts_threshold_exceeded?: ToggleSwitch;
disable_strategy_on_error_attempts_threshold_exceeded?: ToggleSwitch;
instruments_settings_sync_enabled?: ToggleSwitch;
strategy_settings_sync_enabled?: ToggleSwitch;
meta?: string;
is_active: ToggleSwitch;
version?: number;
min_spread?: number;
on_min_spread_violation?: OnMinSpreadViolation;
maximum_publish_quantity?: number;
}

export interface UpdateInstrumentStrategyArgs{
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
hedge_quantity_trigger_buy?: number;
hedge_quantity_trigger_sell?: number;
hedge_quantity_increment?: number;
hedging_order_ttl_ms?: number;
meta?: string;
is_active?: ToggleSwitch;
version?: number;
min_spread?: number;
on_min_spread_violation?: OnMinSpreadViolation;
hedging_enabled?: ToggleSwitch;
hedging_order_price?: InstrumentStrategyHedgingOrderPrice;
hedging_order_type?: OrderType;
instruments_settings_sync_enabled?: ToggleSwitch;
strategy_settings_sync_enabled?: ToggleSwitch;
disable_hedging_on_error_attempts_threshold_exceeded?: ToggleSwitch;
disable_strategy_on_error_attempts_threshold_exceeded?: ToggleSwitch;
hedging_error_attempts_threshold?: number;
hedging_order_time_in_force?: OrderTimeInForce;
hedging_error_attempts_count?: number;
maximum_publish_quantity?: number;
instrument_strategy_id?: string;
serial_ids: number[];
}

export interface UpdateInstrumentStrategyHedgeBalanceArgs{
instrument_strategy_id: string;
new_hedge_balance: number;
old_hedge_balance: number;
}

export interface OperateInstrumentStrategyHedgeBalanceArgs{
instrument_strategy_id: string;
side: OrderSide;
amount: number;
reference: string;
reference_id: string;
}

export interface DeleteInstrumentStrategyArgs{
serial_id?: number;
serial_ids: number[];
}

export interface TriggerCreateHedgingRemoteOrderJobArgs{
hedging_order_id: string;
}

export interface TriggerCompleteHedgingRemoteOrderJobArgs{
hedging_order_id: string;
}

export interface TriggerRejectHedgingRemoteOrderJobArgs{
hedging_order_id: string;
status: HedgingOrderStatus;
message: string;
}

export interface UpdateSystemSettingArgs{
name: string;
value?: string;
}

export interface UpdateSystemSettingsArgs{
items: SettingItem[];
}

export interface UpdateMaintenanceModeArgs{
maintenance_mode: ToggleSwitch;
maintenance_message: string;
}

export interface UpdateNotificationsSettingsArgs{
client: NotificationTrigger[];
push: NotificationTrigger[];
email: NotificationTrigger[];
sms: NotificationTrigger[];
}

export interface UpdateDefaultNotificationsArgs{
enable_email_notifications_by_default: ToggleSwitch;
}

export interface UpdateDelayedMutationsArgs{
mutations: string[];
}

export interface UpdateGeoRestrictionsArgs{
region_blacklist?: RegionBlacklistItemInput[];
country_blacklist?: BlacklistItemInput[];
}

export interface UpdateAdminPermissionsArgs{
users_ids: string[];
subjects: string[];
}

export interface CreateKycManualRequestArgs{
user_id: string;
kyc_data: KycUserDataEntryInput[];
}

export interface CreateKycSessionArgs{
kyc_type?: KycType;
user_id?: string;
}

export interface UpdateKycPreferencesArgs{
individual?: KycPreferenceInput;
corporate?: KycPreferenceInput;
}

export interface CreateWebhookArgs{
name: string;
is_active: ToggleSwitch;
user_id?: string;
url: string;
triggers: NotificationTrigger[];
}

export interface UpdateWebhookArgs{
name?: string;
is_active?: ToggleSwitch;
webhook_id: string;
url?: string;
triggers: NotificationTrigger[];
}

export interface DeleteWebhookArgs{
webhook_id: string;
}

export interface EmitEventArgs{
event: NotificationTrigger;
payload: string;
}

export interface CreateHedgingAdapterArgs{
hedging_adapter_id: string;
service_url: string;
service_api_key: string;
broker_user_id: string;
hedging_enabled: ToggleSwitch;
account_balances_sync_enabled: ToggleSwitch;
meta?: string;
maker_fee?: number;
taker_fee?: number;
fees_sync_enabled?: ToggleSwitch;
create_broker_user_id?: boolean;
}

export interface UpdateHedgingAdapterArgs{
service_url?: string;
service_api_key?: string;
broker_user_id?: string;
hedging_enabled?: ToggleSwitch;
account_balances_sync_enabled?: ToggleSwitch;
meta?: string;
maker_fee?: number;
taker_fee?: number;
fees_sync_enabled?: ToggleSwitch;
hedging_adapter_id: string;
create_broker_user_id?: boolean;
}

export interface DeleteHedgingAdapterArgs{
hedging_adapter_id: string;
}

export interface CreateTradingLimitArgs{
limit_group_id: string;
instrument_id: string;
daily_limit?: number;
weekly_limit?: number;
monthly_limit?: number;
notion_currency?: string;
}

export interface UpdateTradingLimitArgs{
limit_group_id?: string;
instrument_id?: string;
notion_currency?: string;
daily_limit?: number;
weekly_limit?: number;
monthly_limit?: number;
serial_ids?: number;
}

export interface DeleteTradingLimitArgs{
limit_group_id: string;
instrument_id: string;
}

export interface UpdateDelayedRequestArgs{
delayed_request_id?: string;
approval_status?: DelayedRequestStatus;
}

export interface DeleteDelayedRequestArgs{
delayed_request_id?: string;
}

export interface CreateUserMfaSecretArgs{
}

export interface CreateAdminMfaSecretArgs{
email?: string;
}

export interface UpdateUserMfaStatusArgs{
status: ToggleSwitch;
secret?: string;
token: string;
}

export interface UpdateAdminMfaStatusArgs{
status: ToggleSwitch;
secret?: string;
token: string;
}

export interface VerifyUserMfaTokenArgs{
token: string;
}

export interface VerifyAdminMfaTokenArgs{
token: string;
}

export interface SendTestEmailArgs{
trigger: NotificationTrigger;
to: string;
}

export interface SendTestPushArgs{
title: string;
message: string;
body: string;
trigger?: NotificationTrigger;
}

export interface CreateKycUserDataArgs{
user_id: string;
kyc_data: KycUserDataEntryInput[];
}

export interface UpdateKycUserDataArgs{
user_id: string;
kyc_data: KycUserDataEntryInput[];
}

export interface DeleteKycUserDataArgs{
user_id: string;
kyc_property: string;
}

export interface CreatePermissionPresetArgs{
name: string;
subjects: string[];
updated_name?: string;
}

export interface UpdatePermissionPresetArgs{
name: string;
subjects: string[];
updated_name?: string;
}

export interface DeletePermissionPresetArgs{
name: string;
}

export interface CreateInstrumentsStrategiesScheduleArgs{
instrument_strategy_id: string;
markup_ask: number;
markup_bid: number;
is_active: ToggleSwitch;
time_from_day_of_week: DayOfWeek;
time_from_hours: number;
time_from_minutes: number;
time_to_day_of_week: DayOfWeek;
time_to_hours: number;
time_to_minutes: number;
}

export interface UpdateInstrumentsStrategiesScheduleArgs{
instrument_strategy_id?: string;
markup_ask?: number;
markup_bid?: number;
is_active?: ToggleSwitch;
time_from_day_of_week?: DayOfWeek;
time_from_hours?: number;
time_from_minutes?: number;
time_to_day_of_week?: DayOfWeek;
time_to_hours?: number;
time_to_minutes?: number;
instruments_strategies_schedule_id: string;
}

export interface DeleteInstrumentsStrategiesScheduleArgs{
instruments_strategies_schedule_id: string;
}

export interface CreateCurrencyPriceArgs{
base_currency_id: string;
quote_currency_id: string;
ask: number;
bid: number;
source: string;
}

export interface UpdateCurrencyPriceArgs{
base_currency_id: string;
quote_currency_id: string;
ask: number;
bid: number;
source: string;
}

export interface DeleteCurrencyPriceArgs{
base_currency_id: string;
quote_currency_id: string;
source: string;
}

export interface SetCurrencyPriceArgs{
base_currency_id: string;
quote_currency_id: string;
ask: number;
bid: number;
source: string;
}

export interface CreateIpWhitelistItemsArgs{
emails: string[];
ip_address?: string;
note?: string;
}

export interface UpdateIpWhitelistItemArgs{
ip_whitelist_id: string;
note?: string;
}

export interface DeleteIpWhitelistItemArgs{
ip_whitelist_id: string;
}

export interface UpdateHedgingAccountArgs{
usd_threshold?: number;
is_active?: ToggleSwitch;
hedging_adapter_id: string;
currency_id: string;
}

export interface SendMarginTradeNotifArgs{
user_id: string;
trigger: NotificationTrigger;
payload: string;
}

export interface CreateMarginAccountTransactionArgs{
item: RecordTransactionItem;
}

export interface UpdateAdminPropertiesArgs{
properties: UpdateAdminPropertyInput[];
}

export interface CreateUploadArgs{
document_type: UploadDocumentType;
content_type: string;
user_id?: string;
}

export interface CompleteUploadArgs{
upload_id: string;
size: number;
original_name: string;
s3_etag: string;
}

export interface UpdateEllipticRiskThresholdArgs{
threshold: number;
}

export interface UpdateScorechainMinimalRiskScoreArgs{
risk_score: number;
}

export interface UpdatePaymentKytStatusArgs{
payment_id: string;
kyt_status: PaymentKytStatus;
kyt_approval_reason?: string;
}

export interface ReprocessKytPaymentArgs{
payment_id: string;
}

export interface CreateInstrumentStrategyRuleArgs{
instrument_strategy_id: string;
is_active: ToggleSwitch;
min_total_volume: number;
min_ask_volume: number;
min_bid_volume: number;
max_spread: number;
max_update_interval?: number;
max_violations_before_measures?: number;
disable_strategy_if_violated?: ToggleSwitch;
disable_hedging_if_violated?: ToggleSwitch;
}

export interface UpdateInstrumentStrategyRuleArgs{
is_active?: ToggleSwitch;
min_total_volume?: number;
min_ask_volume?: number;
min_bid_volume?: number;
max_spread?: number;
max_update_interval?: number;
max_violations_before_measures?: number;
disable_strategy_if_violated?: ToggleSwitch;
disable_hedging_if_violated?: ToggleSwitch;
instrument_strategy_id: string;
}

export interface DeleteInstrumentStrategyRuleArgs{
instrument_strategy_id: string;
}

export interface CreateVaultArgs{
currency_id: string;
name?: string;
annual_rate_percent: number;
max_withdrawal_amount: number;
max_deposit_amount: number;
min_withdrawal_amount: number;
min_deposit_amount: number;
cut_off_time_seconds: number;
lock_in_period_seconds?: number;
effective_date_from: string;
effective_date_to?: string;
rate_type: VaultRateType;
is_active: ToggleSwitch;
withdrawal_enabled: ToggleSwitch;
deposit_enabled: ToggleSwitch;
withdrawal_policy?: VaultWithdrawalPolicy;
withdrawal_delay_seconds?: number;
meta?: string;
}

export interface UpdateVaultArgs{
currency_id?: string;
name?: string;
annual_rate_percent?: number;
max_withdrawal_amount?: number;
max_deposit_amount?: number;
min_withdrawal_amount?: number;
min_deposit_amount?: number;
cut_off_time_seconds?: number;
lock_in_period_seconds?: number;
effective_date_from?: string;
effective_date_to?: string;
rate_type?: VaultRateType;
is_active?: ToggleSwitch;
withdrawal_enabled?: ToggleSwitch;
deposit_enabled?: ToggleSwitch;
withdrawal_policy?: VaultWithdrawalPolicy;
withdrawal_delay_seconds?: number;
meta?: string;
vault_id: string;
}

export interface TriggerVaultsInterestsCalculationArgs{
}

export interface TriggerVaultsLocksWithdrawalsArgs{
}

export interface TriggerExpiredVaultsProcessingArgs{
}

export interface TriggerDelayedVaultsTrxProcessingArgs{
}

export interface CreateVaultWithdrawalArgs{
vault_id: string;
amount: number;
user_id?: string;
use_all_funds?: boolean;
}

export interface CreateVaultDepositArgs{
vault_id: string;
amount: number;
user_id?: string;
use_all_funds?: boolean;
}

export interface CreateVaultTransactionArgs{
vault_id: string;
amount: number;
transaction_type: AccountTransactionType;
user_id?: string;
use_all_funds?: boolean;
}

export interface CreateVaultManualTransactionsArgs{
items: CreateVaultTransactionInput[];
}

export interface UpdateVaultTransactionRequestArgs{
request_id: string;
status: VaultTransactionRequestStatus;
approval_reason?: string;
}

export interface CancelVaultTransactionRequestArgs{
request_id: string;
user_id?: string;
}

export interface CreateReferralArgs{
user_id?: string;
}

export interface ClaimReferralArgs{
referral_id: string;
user_id?: string;
}

export interface CalculatePaymentsLimitsArgs{
notion_currency: string;
currency_id: string;
type: PaymentType;
}

export interface CreateAggregatedPaymentLimitArgs{
limit_group_id: string;
currency_id: string;
withdrawal_daily_limit?: number;
withdrawal_weekly_limit?: number;
withdrawal_monthly_limit?: number;
is_active: ToggleSwitch;
}

export interface UpdateAggregatedPaymentLimitArgs{
limit_group_id?: string;
currency_id?: string;
withdrawal_daily_limit?: number;
withdrawal_weekly_limit?: number;
withdrawal_monthly_limit?: number;
is_active?: ToggleSwitch;
serial_ids: number[];
}

export interface DeleteAggregatedPaymentLimitArgs{
serial_id?: number;
serial_ids: number[];
}

export interface SyncConfigArgs{
api_url: string;
mode?: SyncConfigMode;
api_key: string;
api_secret: string;
currencies?: boolean;
hedging_adapters?: boolean;
instruments?: boolean;
instruments_strategies?: boolean;
payments_routes?: boolean;
limits_groups?: boolean;
trading_limits?: boolean;
payments_limits?: boolean;
fees_groups?: boolean;
trading_fees?: boolean;
payments_fees?: boolean;
}

export interface CreateIpBlacklistItemArgs{
ip_address: string;
reason?: string;
}

export interface CreateIpBlacklistItemsArgs{
ip_addresses: string[];
reason?: string;
}

export interface UpdateIpBlacklistItemArgs{
ip_address: string;
reason?: string;
}

export interface RemoveIpBlacklistItemArgs{
ip_address: string;
}

export interface ResetDemoBalancesArgs{
user_id?: string;
}

export interface ActivateLicenseArgs{
}

export interface RenewLicenseArgs{
}

export interface CreateReferralRewardArgs{
is_active: ToggleSwitch;
type: ReferralRewardType;
meta: string;
min_deposited_volume_required: ToggleSwitch;
min_deposited_volume?: number;
min_deposited_volume_currency_id?: string;
kyc_required: ToggleSwitch;
is_delayed?: ToggleSwitch;
delayed_period_seconds?: number;
min_staked_vault_required?: ToggleSwitch;
min_staked_vault_volume?: number;
min_staked_vault_currency_id?: string;
}

export interface UpdateReferralRewardArgs{
is_active?: ToggleSwitch;
meta?: string;
min_deposited_volume_required?: ToggleSwitch;
min_deposited_volume?: number;
min_deposited_volume_currency_id?: string;
kyc_required?: ToggleSwitch;
delayed_period_seconds?: number;
min_staked_vault_volume?: number;
min_staked_vault_currency_id?: string;
type: ReferralRewardType;
is_delayed?: ToggleSwitch;
min_staked_vault_required?: ToggleSwitch;
}

export interface DeleteReferralRewardArgs{
type: ReferralRewardType;
}

export interface StartTradingGridArgs{
user_id?: string;
instrument_id: string;
initial_investment_quote_currency: number;
mode: TradginGridMode;
size: number;
price_range_from: number;
price_range_to: number;
stop_loss_percentage?: number;
take_profit_percentage?: number;
wallet_id?: string;
}

export interface StopTradingGridArgs{
trading_grid_id: string;
}

export interface UpdateTradingGridArgs{
trading_grid_id: string;
stop_loss_percentage?: number;
take_profit_percentage?: number;
}

export interface EstimateTradingGridArgs{
user_id?: string;
instrument_id: string;
initial_investment_quote_currency: number;
mode: TradginGridMode;
size: number;
price_range_from: number;
price_range_to: number;
stop_loss_percentage?: number;
take_profit_percentage?: number;
wallet_id?: string;
time_from: number;
time_to: number;
}

export interface UserSwitchFeeGroupArgs{
fee_group_name: FxcmFeeGroups;
}

export interface UpdateWithdrawalNotionalFeeArgs{
notional: number;
}

export interface CreateTradeTierArgs{
fee_group_id: string;
name: string;
maker_progressive: number;
taker_progressive: number;
threshold: number;
}

export interface UpdateTradeTierArgs{
tier_id?: string;
name?: string;
maker_progressive?: number;
taker_progressive?: number;
threshold?: number;
serial_ids: number[];
}

export interface DeleteTradeTierArgs{
tier_id: string;
serial_ids: number[];
}

export interface DeleteTradesVolumeArgs{
user_id: string;
serial_ids: number[];
}

export interface CreateWalletArgs{
name: string;
user_id?: string;
description?: string;
}


export interface VersionArgs{
}

export interface OpenOrdersArgs{
order_id?: string;
client_order_id?: string;
time_in_force?: OrderTimeInForce;
type?: OrderType;
side?: OrderSide;
instrument_id?: string;
message?: string;
parent_order_id?: string;
user_id?: string;
search?: string;
status: OrderStatus[];
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
serialIdRange?: SerialIdRangeInput;
wallet_id?: string;
}

export interface ClosedOrdersArgs{
order_id?: string;
client_order_id?: string;
time_in_force?: OrderTimeInForce;
type?: OrderType;
side?: OrderSide;
instrument_id?: string;
message?: string;
parent_order_id?: string;
user_id?: string;
search?: string;
status: OrderStatus[];
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
serialIdRange?: SerialIdRangeInput;
wallet_id?: string;
}

export interface EstimateOrderArgs{
user_id?: string;
source_currency_id: string;
source_currency_amount?: number;
target_currency_id: string;
target_currency_amount?: number;
price?: number;
instrument_id?: string;
}

export interface TradesArgs{
trade_id?: string;
instrument_id?: string;
order_id?: string;
side?: OrderSide;
counter_order_id?: string;
user_id?: string;
search?: string;
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
serialIdRange?: SerialIdRangeInput;
}

export interface SsoSettingsArgs{
}

export interface HealthcheckArgs{
}

export interface AdminsArgs{
serialIdRange?: SerialIdRangeInput;
}

export interface InstrumentsArgs{
instrument_id?: string;
is_active?: ToggleSwitch;
search?: string;
page?: number;
limit?: number;
sort?: SortInput;
store_mode?: ToggleSwitch;
}

export interface InstrumentPriceBarsArgs{
periodicity?: InstrumentHistoryPeriodicity;
limit?: number;
date_range?: DateRangeInput;
instrument_id: string;
}

export interface CurrenciesArgs{
search?: string;
type?: CurrencyType;
is_active?: ToggleSwitch;
page?: number;
limit?: number;
store_mode?: ToggleSwitch;
}

export interface PaymentsArgs{
payment_id?: string;
remote_txid?: string;
kyt_status?: PaymentKytStatus;
currency_id?: string;
type?: PaymentType;
psp_service_id?: string;
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
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
serialIdRange?: SerialIdRangeInput;
kyt_status_in: PaymentKytStatus[];
currency_type?: CurrencyType;
quote_currency_id?: string;
internal_transfer_cross_reference?: string;
crypto_pay_payments?: boolean;
}

export interface DepositAddressCryptoArgs{
user_id?: string;
currency_id: string;
network?: string;
reference?: string;
psp_service_id?: string;
address_type?: string;
payment_route_id?: string;
}

export interface DepositAddressesCryptoArgs{
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
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
}

export interface ConversionsArgs{
user_id?: string;
search?: string;
reference?: string;
status_in: ConversionStatus[];
conversion_quote_id?: string;
source_currency_id?: string;
target_currency_id?: string;
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
serialIdRange?: SerialIdRangeInput;
wallet_id?: string;
}

export interface ConversionQuotesArgs{
user_id?: string;
search?: string;
conversion_quote_id?: string;
reference?: string;
source_currency_id?: string;
target_currency_id?: string;
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
}

export interface ConversionQuotesRisksArgs{
source_currency_id?: string;
target_currency_id?: string;
instrument_id?: string;
user_id?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface UsersArgs{
parent_user_id?: string;
username?: string;
email?: string;
is_active?: ToggleSwitch;
is_deleted?: ToggleSwitch;
fee_group_id?: string;
limit_group_id?: string;
user_id?: string;
search?: string;
kyc_property?: string;
kyc_value?: string;
kyc_status?: UserKycStatus;
kyc_level?: string;
status?: UserStatus;
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
serialIdRange?: SerialIdRangeInput;
mfa_status?: ToggleSwitch;
}

export interface TotalUsersArgs{
}

export interface UserArgs{
user_id?: string;
}

export interface AccountTransactionsArgs{
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
margin_trade_id?: string;
comment?: string;
created_by?: string;
user_id?: string;
search?: string;
instrument_id?: string;
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
serialIdRange?: SerialIdRangeInput;
}

export interface AccountsBalancesArgs{
user_id?: string;
currency_id?: string;
hide_zero_balances?: ToggleSwitch;
wallet_id?: string;
}

export interface AccountsArgs{
account_id?: string;
currency_id?: string;
wallet_id?: string;
user_id?: string;
search?: string;
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
serialIdRange?: SerialIdRangeInput;
hide_zero_balances?: ToggleSwitch;
}

export interface LimitsGroupsArgs{
limit_group_id?: string;
name?: string;
description?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface FeesGroupsArgs{
fee_group_id?: string;
name?: string;
description?: string;
beneficiary_user_id?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface PaymentsFeesArgs{
payment_route_id?: string;
currency_id?: string;
fee_group_id?: string;
pager?: PagerInput;
sort?: SortInput;
calculation_type?: FeeCalculationType;
}

export interface TradingFeesArgs{
instrument_id?: string;
fee_group_id?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface PaymentsRoutesArgs{
payment_route_id?: string;
currency_id?: string;
psp_service_id?: string;
crypto_network?: string;
verification_type?: VerificationType;
currency_type?: CurrencyType;
pager?: PagerInput;
sort?: SortInput;
}

export interface CryptoNetworksArgs{
}

export interface PspServicesArgs{
}

export interface PaymentsLimitsArgs{
limit_group_id?: string;
currency_id?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface ApiKeysArgs{
user_id?: string;
pager?: PagerInput;
sort?: SortInput;
search?: string;
}

export interface CognitoPoolsArgs{
search?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface InstrumentsStrategiesArgs{
hedging_adapter_id?: string;
instrument_id?: string;
search?: string;
pager?: PagerInput;
sort?: SortInput;
is_active?: ToggleSwitch;
hedging_enabled?: ToggleSwitch;
}

export interface HedgingOrdersArgs{
hedging_adapter_id?: string;
side?: OrderSide;
status?: HedgingOrderStatus;
error_message?: string;
pager?: PagerInput;
search?: string;
sort?: SortInput;
dateRange?: DateRangeInput;
}

export interface SystemSettingsArgs{
search?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface NotificationSettingsArgs{
}

export interface DefaultNotificationsArgs{
}

export interface DelayedMutationsArgs{
}

export interface GeoRestrictionsArgs{
}

export interface TraderMfaProviderArgs{
}

export interface AdminMfaProviderArgs{
}

export interface IsMarginTradingEnabledArgs{
}

export interface ProductsEnabledArgs{
role: ClientRole;
}

export interface UserProductsEnabledArgs{
role: ClientRole;
}

export interface AccountsPortfolioReportArgs{
currencies: string[];
}

export interface OrdersSummaryReportArgs{
user_id?: string;
dateRange?: DateRangeInput;
}

export interface ConversionsSummaryReportArgs{
user_id?: string;
dateRange?: DateRangeInput;
}

export interface LiquidityReportArgs{
}

export interface DailyBalancesReportArgs{
user_id?: string;
dateRange?: DateRangeInput;
}

export interface OpenExposureReportArgs{
base_currency_id?: string;
quote_currency_id?: string;
pager?: PagerInput;
}

export interface PermissionsArgs{
searchFor?: EPermissionsSearchFor;
role?: Role;
}

export interface PermissionsSubjectsArgs{
}

export interface AllPermissionSubjectsArgs{
}

export interface PermissionsShareArgs{
search?: string;
user_id?: string;
subject?: string;
pager?: PagerInput;
sort?: SortInput;
group_by?: FindPermissionsShareGroupBy;
}

export interface KycPreferencesArgs{
}

export interface VaspsListArgs{
}

export interface WebhooksArgs{
is_active?: ToggleSwitch;
user_id?: string;
search?: string;
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
}

export interface HedgingAdapterIdsArgs{
}

export interface HedgingAdaptersArgs{
}

export interface TimelineArgs{
user_id?: string;
event_data?: string;
created_at?: string;
search?: string;
event_name: NotificationTrigger[];
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
}

export interface TradingLimitsArgs{
limit_group_id?: string;
instrument_id?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface TradingVolumesArgs{
user_id?: string;
instrument_id?: string;
pager?: PagerInput;
sort?: SortInput;
volume?: TradingVolumeType;
}

export interface CountriesArgs{
search?: string;
}

export interface ProvincesArgs{
country_code: string;
search?: string;
}

export interface DelayedRequestsArgs{
delayed_request_id?: string;
request_name?: string;
approval_status?: DelayedRequestStatus;
admin_id?: string;
admin_email?: string;
approved_by?: string;
pager?: PagerInput;
sort?: SortInput;
search?: string;
}

export interface KycUserDataArgs{
user_id?: string;
search?: string;
kyc_properties: string[];
}

export interface PermissionPresetsArgs{
}

export interface InstrumentsStrategiesScheduleArgs{
instruments_strategies_schedule_id?: string;
serial_id?: number;
instrument_strategy_id?: string;
is_active?: ToggleSwitch;
time_from_day_of_week?: DayOfWeek;
time_from_hours?: number;
time_from_minutes?: number;
time_to_day_of_week?: DayOfWeek;
time_to_hours?: number;
time_to_minutes?: number;
is_working?: ToggleSwitch;
}

export interface CurrenciesPricesArgs{
base_currency_id?: string;
quote_currency_id?: string;
source?: string;
search?: string;
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
}

export interface CurrencyPricesArgs{
base_currencies: string[];
quote_currency: string;
}

export interface ConvertCurrencyAmountArgs{
base_currency_id: string;
quote_currency_id: string;
amount: number;
}

export interface IpWhitelistArgs{
ip_address?: string;
email?: string;
ip_whitelist_id?: string;
search?: string;
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
}

export interface HedgingAccountsArgs{
hedging_adapter_id?: string;
currency_id?: string;
is_active?: ToggleSwitch;
pager?: PagerInput;
sort?: SortInput;
}

export interface MarginAccountTransactionsArgs{
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
margin_trade_id?: string;
comment?: string;
created_by?: string;
user_id?: string;
search?: string;
instrument_id?: string;
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
serialIdRange?: SerialIdRangeInput;
}

export interface MarginUsersFreeBalancesArgs{
users_ids: string[];
}

export interface AdminPropertiesArgs{
name?: string;
search?: string;
}

export interface AdminMfaStatusArgs{
}

export interface EllipticScreeningsArgs{
}

export interface EllipticRiskThresholdArgs{
}

export interface ScorechainScreeningsArgs{
screening_id?: string;
payment_id?: string;
analysis_target?: KytAnalysisTarget;
provider: KytProvider;
pager?: PagerInput;
sort?: SortInput;
}

export interface ScorechainMinimalRiskScoreArgs{
}

export interface InstrumentsStrategiesRulesArgs{
instrument_strategy_id?: string;
instrument_id?: string;
hedging_adapter_id?: string;
search?: string;
sort?: SortInput;
pager?: PagerInput;
}

export interface InstrumentsStrategiesAlertsArgs{
instrument_strategy_id?: string;
alert_trigger?: InstrumentStrategyAlertTrigger;
instrument_id?: string;
hedging_adapter_id?: string;
search?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface VaultsArgs{
vault_id?: string;
currency_id?: string;
is_active?: ToggleSwitch;
withdrawal_enabled?: ToggleSwitch;
deposit_enabled?: ToggleSwitch;
withdrawal_policy?: VaultWithdrawalPolicy;
search?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface VaultsAverageUserApyArgs{
user_id?: string;
}

export interface EstimateVaultInterestsArgs{
vault_id: string;
amount: number;
duration_seconds?: number;
}

export interface VaultsAccountsArgs{
vault_account_id?: string;
vault_id?: string;
user_id?: string;
currency_id?: string;
hide_zero_balances?: ToggleSwitch;
search?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface VaultsTotalUserBalanceQuotedArgs{
quote_currency_id: string;
user_id?: string;
}

export interface VaultsTransactionsArgs{
vault_id?: string;
user_id?: string;
vault_transaction_id?: string;
account_transaction_id?: string;
transaction_type?: AccountTransactionType;
transaction_class?: VaultsTransactionClass;
search?: string;
currency_id?: string;
pager?: PagerInput;
date_range?: DateRangeInput;
sort?: SortInput;
}

export interface PortfolioHistoryArgs{
currency_id: string;
user_id?: string;
timestamp: string;
interval: PortfolioHistoryInterval;
}

export interface ProfitsDashboardArgs{
currency_id: string;
interval: DashboardReportInterval;
}

export interface ConversionsDashboardArgs{
currency_id: string;
interval: DashboardReportInterval;
}

export interface VolumeDashboardArgs{
currency_id: string;
interval: DashboardReportInterval;
}

export interface DepositsDashboardArgs{
currency_id: string;
interval: DashboardReportInterval;
}

export interface WithdrawalsDashboardArgs{
currency_id: string;
interval: DashboardReportInterval;
}

export interface SummaryDashboardArgs{
currency_id: string;
interval: DashboardReportInterval;
}

export interface UnifiedTransactionsArgs{
start_date: string;
end_date: string;
side?: OrderSide;
currencies: string[];
exchanges: string[];
search?: string;
pager?: PagerInput;
}

export interface UnifiedTransactionsLpsArgs{
}

export interface VaultsTransactionsRequestsArgs{
serial_id?: number;
request_id?: string;
user_id?: string;
vault_id?: string;
transaction_type?: AccountTransactionType;
transaction_class?: VaultsTransactionClass;
status?: VaultTransactionRequestStatus;
approved_by?: string;
search?: string;
pager?: PagerInput;
date_range?: DateRangeInput;
sort?: SortInput;
currency_id?: string;
}

export interface ReferralsArgs{
referral_id?: string;
user_id?: string;
search?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface AggregatedPaymentsLimitsArgs{
limit_group_id?: string;
currency_id?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface AuditTrailLogArgs{
entity?: string;
action?: string;
actor_id?: string;
actor_ip?: string;
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
search?: string;
search_expression?: string;
}

export interface MyAuditTrailLogArgs{
entity?: string;
action?: string;
actor_id?: string;
actor_ip?: string;
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
search?: string;
search_expression?: string;
}

export interface AdminEventsLogArgs{
search?: string;
action?: string;
actor_id?: string;
pager?: PagerInput;
dateRange?: DateRangeInput;
serialIdRange?: SerialIdRangeInput;
}

export interface ReferralsHistoryArgs{
referral_id?: string;
parent_user_id?: string;
child_user_id?: string;
search?: string;
date_range?: DateRangeInput;
pager?: PagerInput;
sort?: SortInput;
}

export interface ReferredUsersCountArgs{
user_id?: string;
}

export interface ReferrerTotalRewardQuotedArgs{
user_id?: string;
quote_currency_id: string;
}

export interface BlacklistItemsArgs{
ip_address?: string;
reason?: string;
search?: string;
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
}

export interface SystemLogsArgs{
stem?: string;
event?: string;
rrn?: string;
pager?: PagerInput;
dateRange?: DateRangeInput;
serialIdRange?: SerialIdRangeInput;
}

export interface WhoamiArgs{
}

export interface ReferralsTransactionsInfoArgs{
account_transaction_id?: string;
target_user_id?: string;
referral_id?: string;
reward_type?: ReferralRewardType;
currency_id?: string;
is_delayed?: ToggleSwitch;
date_range?: DateRangeInput;
search?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface LicenseArgs{
}

export interface ReferralRewardsArgs{
}

export interface RequiredActionsArgs{
}

export interface TradingGridsArgs{
instrument_id?: string;
status?: TradingGridStatus;
price_from?: number;
price_to?: number;
pager?: PagerInput;
sort?: SortInput;
wallet_id?: string;
}

export interface TradingGridLevelsArgs{
instrument_id?: string;
status?: TradingGridLevelStatus;
sell_order_id?: string;
buy_order_id?: string;
trading_grid_id?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface UserFeesConfigArgs{
}

export interface EstimatePaymentNotionalFeeArgs{
currency_id: string;
type: PaymentType;
amount: number;
}

export interface CashHoldingsReportArgs{
user_id?: string;
date_range?: DateRangeInput;
}

export interface TradeTiersArgs{
tier_id?: string;
fee_group_id?: string;
name?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface TradeVolumesArgs{
serial_id?: number;
user_id?: string;
pager?: PagerInput;
sort?: SortInput;
}

export interface WalletsArgs{
wallet_id?: string;
user_id?: string;
name?: string;
description?: string;
pager?: PagerInput;
sort?: SortInput;
dateRange?: DateRangeInput;
}

export interface UserIpGeoHistoryArgs{
date_ts?: string;
user_id?: string;
ip_address?: string;
country?: string;
user_agent?: string;
}

export interface UserIpGeoHistoryOverviewArgs{
from_date: string;
to_date: string;
}

export interface UserIpGeoHistoryDetailArgs{
lat: number;
lon: number;
from_date: string;
to_date: string;
}


 
        export function buildGraphQLQuery(fields:any) {
            const queryFields = fields.map((field:any) => {
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

        constructor(endpoint: string, options?: any | undefined) {
            this.gql_client = new GraphQLClient(endpoint,options);
        }

        setGlobalCustomHeader(header_name: string, value: any): void {
            this.global_headers[header_name] = value;
        }

        setGlobalAuthToken(token: string): void {
            this.global_headers['authorization'] = `Bearer ${token}`;
        }

        async gql_request(document: RequestDocument, variables?: any, requestHeaders?: HeadersInit, name?: string) {
            return this.gql_client.request(document, variables, {...this.global_headers, ...requestHeaders}).then((res) => {
                //@ts-ignore
                if (name) return res[name];
                return res;
            });
        }

        async restart_system({  headers}:{  headers?:HeadersInit}={}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation {
                    restart_system
                        
                }
                `,{},headers,'restart_system')
                }

async create_order({args, fields,  headers}:{args: CreateOrderArgs, fields:((keyof Order) | Partial<Record<keyof Order,any[]>>)[], headers?:HeadersInit}):Promise<Order>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String,$wallet_id: String,$client_order_id: String,$instrument_id: String!,$quantity: Float!,$quantity_mode: OrderQuantityMode,$type: OrderType!,$side: OrderSide!,$time_in_force: OrderTimeInForce!,$price: Float,$expires_at: String,$notes: String,$stop_price: Float,$post_only: ToggleSwitch) {
                    create_order(user_id:$user_id,wallet_id:$wallet_id,client_order_id:$client_order_id,instrument_id:$instrument_id,quantity:$quantity,quantity_mode:$quantity_mode,type:$type,side:$side,time_in_force:$time_in_force,price:$price,expires_at:$expires_at,notes:$notes,stop_price:$stop_price,post_only:$post_only)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_order')
                }

async update_open_order({args, fields,  headers}:{args: UpdateOpenOrderArgs, fields:((keyof Order) | Partial<Record<keyof Order,any[]>>)[], headers?:HeadersInit}):Promise<Order>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String,$order_id: String!,$quantity: Float!,$price: Float!,$expires_at: String) {
                    update_open_order(user_id:$user_id,order_id:$order_id,quantity:$quantity,price:$price,expires_at:$expires_at)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'update_open_order')
                }

async cancel_multiple_orders({args,  headers}:{args: CancelMultipleOrdersArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($order_ids: [string!]!,$message: String) {
                    cancel_multiple_orders(order_ids:$order_ids,message:$message)
                        
                }
                `,args || {},headers,'cancel_multiple_orders')
                }

async cancel_order({args,  headers}:{args: CancelOrderArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String,$order_id: String!,$message: String) {
                    cancel_order(user_id:$user_id,order_id:$order_id,message:$message)
                        
                }
                `,args || {},headers,'cancel_order')
                }

async cancel_all_orders({args,  headers}:{args?: CancelAllOrdersArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String) {
                    cancel_all_orders(user_id:$user_id)
                        
                }
                `,args || {},headers,'cancel_all_orders')
                }

async service_signin({args, fields,  headers}:{args: ServiceSigninArgs, fields:((keyof SignInResult) | Partial<Record<keyof SignInResult,any[]>>)[], headers?:HeadersInit}):Promise<SignInResult>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($service_api_key: String!,$service_api_secret: String!) {
                    service_signin(service_api_key:$service_api_key,service_api_secret:$service_api_secret)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'service_signin')
                }

async checkin({  headers}:{  headers?:HeadersInit}={}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation {
                    checkin
                        
                }
                `,{},headers,'checkin')
                }

async checkout({  headers}:{  headers?:HeadersInit}={}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation {
                    checkout
                        
                }
                `,{},headers,'checkout')
                }

async restrictions_check({  headers}:{  headers?:HeadersInit}={}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation {
                    restrictions_check
                        
                }
                `,{},headers,'restrictions_check')
                }

async register_trader_local({args,  headers}:{args: RegisterTraderLocalArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($email: String!,$password: String!,$first_name: String!,$last_name: String!) {
                    register_trader_local(email:$email,password:$password,first_name:$first_name,last_name:$last_name)
                        
                }
                `,args || {},headers,'register_trader_local')
                }

async trader_signin_local({args,  headers}:{args: TraderSigninLocalArgs,  headers?:HeadersInit}):Promise<string>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($email: String!,$password: String!) {
                    trader_signin_local(email:$email,password:$password)
                        
                }
                `,args || {},headers,'trader_signin_local')
                }

async create_admins({args,  headers}:{args: CreateAdminsArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($emails: [string!]!,$subjects: [string!]!) {
                    create_admins(emails:$emails,subjects:$subjects)
                        
                }
                `,args || {},headers,'create_admins')
                }

async delete_admin({args,  headers}:{args: DeleteAdminArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String!) {
                    delete_admin(name:$name)
                        
                }
                `,args || {},headers,'delete_admin')
                }

async admin_signin_local({args,  headers}:{args: AdminSigninLocalArgs,  headers?:HeadersInit}):Promise<string>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($email: String!,$password: String!) {
                    admin_signin_local(email:$email,password:$password)
                        
                }
                `,args || {},headers,'admin_signin_local')
                }

async create_local_admin({args,  headers}:{args: CreateLocalAdminArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($email: String!,$password: String!,$subjects: [string!]!) {
                    create_local_admin(email:$email,password:$password,subjects:$subjects)
                        
                }
                `,args || {},headers,'create_local_admin')
                }

async create_instrument({args, fields,  headers}:{args: CreateInstrumentArgs, fields:((keyof Instrument) | Partial<Record<keyof Instrument,any[]>>)[], headers?:HeadersInit}):Promise<Instrument>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String!,$instrument_id: String!,$base_currency_id: String!,$quote_currency_id: String!,$price_decimals: Float!,$quantity_decimals: Int,$quote_quantity_decimals: Int,$min_quantity: Float!,$max_quantity: Float!,$min_quote_quantity: Float!,$max_quote_quantity: Float!,$max_conversion_quote_ttl: Int,$is_active: ToggleSwitch!,$price_collar: Float,$meta: String) {
                    create_instrument(name:$name,instrument_id:$instrument_id,base_currency_id:$base_currency_id,quote_currency_id:$quote_currency_id,price_decimals:$price_decimals,quantity_decimals:$quantity_decimals,quote_quantity_decimals:$quote_quantity_decimals,min_quantity:$min_quantity,max_quantity:$max_quantity,min_quote_quantity:$min_quote_quantity,max_quote_quantity:$max_quote_quantity,max_conversion_quote_ttl:$max_conversion_quote_ttl,is_active:$is_active,price_collar:$price_collar,meta:$meta)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_instrument')
                }

async update_instrument({args,  headers}:{args: UpdateInstrumentArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String,$instrument_id: String,$base_currency_id: String,$quote_currency_id: String,$price_decimals: Float,$quantity_decimals: Int,$quote_quantity_decimals: Int,$min_quantity: Float,$max_quantity: Float,$min_quote_quantity: Float,$max_quote_quantity: Float,$is_active: ToggleSwitch,$meta: String,$max_conversion_quote_ttl: Int,$price_collar: Float,$serial_ids: [number!]!) {
                    update_instrument(name:$name,instrument_id:$instrument_id,base_currency_id:$base_currency_id,quote_currency_id:$quote_currency_id,price_decimals:$price_decimals,quantity_decimals:$quantity_decimals,quote_quantity_decimals:$quote_quantity_decimals,min_quantity:$min_quantity,max_quantity:$max_quantity,min_quote_quantity:$min_quote_quantity,max_quote_quantity:$max_quote_quantity,is_active:$is_active,meta:$meta,max_conversion_quote_ttl:$max_conversion_quote_ttl,price_collar:$price_collar,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'update_instrument')
                }

async delete_instrument({args,  headers}:{args: DeleteInstrumentArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($serial_id: Float,$serial_ids: [number!]!) {
                    delete_instrument(serial_id:$serial_id,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'delete_instrument')
                }

async fill_instrument({args,  headers}:{args: FillInstrumentArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($instrument: String!,$dateTo: String!,$limit: Float!,$periodicity: InstrumentHistoryPeriodicity!) {
                    fill_instrument(instrument:$instrument,dateTo:$dateTo,limit:$limit,periodicity:$periodicity)
                        
                }
                `,args || {},headers,'fill_instrument')
                }

async create_currency({args, fields,  headers}:{args: CreateCurrencyArgs, fields:((keyof Currency) | Partial<Record<keyof Currency,any[]>>)[], headers?:HeadersInit}):Promise<Currency>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($currency_id: String!,$type: CurrencyType!,$precision: Int!,$name: String,$is_active: ToggleSwitch!) {
                    create_currency(currency_id:$currency_id,type:$type,precision:$precision,name:$name,is_active:$is_active)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_currency')
                }

async update_currency({args,  headers}:{args: UpdateCurrencyArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($type: CurrencyType,$precision: Int,$name: String,$is_active: ToggleSwitch,$currency_id: String,$serial_ids: [number!]!) {
                    update_currency(type:$type,precision:$precision,name:$name,is_active:$is_active,currency_id:$currency_id,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'update_currency')
                }

async delete_currency({args,  headers}:{args: DeleteCurrencyArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($currency_id: String!) {
                    delete_currency(currency_id:$currency_id)
                        
                }
                `,args || {},headers,'delete_currency')
                }

async validate_address_crypto({args,  headers}:{args: ValidateAddressCryptoArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($currency_id: String!,$crypto_address: String!,$crypto_network: String) {
                    validate_address_crypto(currency_id:$currency_id,crypto_address:$crypto_address,crypto_network:$crypto_network)
                        
                }
                `,args || {},headers,'validate_address_crypto')
                }

async reprocess_payment({args,  headers}:{args: ReprocessPaymentArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($status: PaymentStatus,$approval_status: PaymentApprovalStatus,$approval_reason: String,$message: String,$error_message: String,$payment_id: String!,$trigger_auto_approval: ToggleSwitch) {
                    reprocess_payment(status:$status,approval_status:$approval_status,approval_reason:$approval_reason,message:$message,error_message:$error_message,payment_id:$payment_id,trigger_auto_approval:$trigger_auto_approval)
                        
                }
                `,args || {},headers,'reprocess_payment')
                }

async update_payment_approval_status({args,  headers}:{args: UpdatePaymentApprovalStatusArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($payment_id: String!,$approval_status: PaymentApprovalStatus!,$approval_reason: String) {
                    update_payment_approval_status(payment_id:$payment_id,approval_status:$approval_status,approval_reason:$approval_reason)
                        
                }
                `,args || {},headers,'update_payment_approval_status')
                }

async create_withdrawal_crypto({args, fields,  headers}:{args: CreateWithdrawalCryptoArgs, fields:((keyof Payment) | Partial<Record<keyof Payment,any[]>>)[], headers?:HeadersInit}):Promise<Payment>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String,$payment_route_id: String,$currency_id: String,$psp_service_id: String,$crypto_network: String,$amount: Float!,$crypto_address: String!,$crypto_address_tag_type: CryptoAddressTagType,$crypto_address_tag_value: String,$crypto_network_fee_preference: String,$reference: String,$mfa_token: String,$fees_included: ToggleSwitch,$skip_address_validation: Boolean,$bank_id_session: String,$travel_rule_properties: TravelRulePropertiesArgs) {
                    create_withdrawal_crypto(user_id:$user_id,payment_route_id:$payment_route_id,currency_id:$currency_id,psp_service_id:$psp_service_id,crypto_network:$crypto_network,amount:$amount,crypto_address:$crypto_address,crypto_address_tag_type:$crypto_address_tag_type,crypto_address_tag_value:$crypto_address_tag_value,crypto_network_fee_preference:$crypto_network_fee_preference,reference:$reference,mfa_token:$mfa_token,fees_included:$fees_included,skip_address_validation:$skip_address_validation,bank_id_session:$bank_id_session,travel_rule_properties:$travel_rule_properties)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_withdrawal_crypto')
                }

async create_withdrawal_fiat({args, fields,  headers}:{args: CreateWithdrawalFiatArgs, fields:((keyof Payment) | Partial<Record<keyof Payment,any[]>>)[], headers?:HeadersInit}):Promise<Payment>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String,$amount: Float!,$payment_route_id: String,$currency_id: String,$psp_service_id: String,$mfa_token: String,$properties: [FiatDepositPropertyInput!]) {
                    create_withdrawal_fiat(user_id:$user_id,amount:$amount,payment_route_id:$payment_route_id,currency_id:$currency_id,psp_service_id:$psp_service_id,mfa_token:$mfa_token,properties:$properties)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_withdrawal_fiat')
                }

async create_payment_manual({args, fields,  headers}:{args: CreatePaymentManualArgs, fields:((keyof Payment) | Partial<Record<keyof Payment,any[]>>)[], headers?:HeadersInit}):Promise<Payment>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($payment_route_id: String!,$remote_txid: String,$user_id: String!,$amount: Float!,$type: PaymentType!,$body_amount: Float,$message: String,$reference: String,$create_account_operations: Boolean,$manual_transaction_date: String,$properties: [FiatDepositPropertyInput!],$status: PaymentStatus,$approval_status: PaymentApprovalStatus) {
                    create_payment_manual(payment_route_id:$payment_route_id,remote_txid:$remote_txid,user_id:$user_id,amount:$amount,type:$type,body_amount:$body_amount,message:$message,reference:$reference,create_account_operations:$create_account_operations,manual_transaction_date:$manual_transaction_date,properties:$properties,status:$status,approval_status:$approval_status)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_payment_manual')
                }

async create_conversion_order({args, fields,  headers}:{args: CreateConversionOrderArgs, fields:((keyof Conversion) | Partial<Record<keyof Conversion,any[]>>)[], headers?:HeadersInit}):Promise<Conversion>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String,$conversion_quote_id: String!,$reference: String,$source_currency_amount: Float,$target_currency_amount: Float,$return_on_complete: Boolean,$wallet_id: String) {
                    create_conversion_order(user_id:$user_id,conversion_quote_id:$conversion_quote_id,reference:$reference,source_currency_amount:$source_currency_amount,target_currency_amount:$target_currency_amount,return_on_complete:$return_on_complete,wallet_id:$wallet_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_conversion_order')
                }

async create_conversion_quote({args, fields,  headers}:{args: CreateConversionQuoteArgs, fields:((keyof CreateConversionQuoteResult) | Partial<Record<keyof CreateConversionQuoteResult,any[]>>)[], headers?:HeadersInit}):Promise<CreateConversionQuoteResult>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String,$source_currency_id: String!,$target_currency_id: String!,$source_currency_amount: Float,$target_currency_amount: Float,$fees_in_price: Boolean,$reference: String,$ttl: Int,$dry_run: ToggleSwitch) {
                    create_conversion_quote(user_id:$user_id,source_currency_id:$source_currency_id,target_currency_id:$target_currency_id,source_currency_amount:$source_currency_amount,target_currency_amount:$target_currency_amount,fees_in_price:$fees_in_price,reference:$reference,ttl:$ttl,dry_run:$dry_run)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_conversion_quote')
                }

async update_user_fee_group({args,  headers}:{args: UpdateUserFeeGroupArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String!,$fee_group_id: String!,$reason: String) {
                    update_user_fee_group(user_id:$user_id,fee_group_id:$fee_group_id,reason:$reason)
                        
                }
                `,args || {},headers,'update_user_fee_group')
                }

async update_user_limit_group({args,  headers}:{args: UpdateUserLimitGroupArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String!,$limit_group_id: String!,$reason: String) {
                    update_user_limit_group(user_id:$user_id,limit_group_id:$limit_group_id,reason:$reason)
                        
                }
                `,args || {},headers,'update_user_limit_group')
                }

async delete_user({  headers}:{  headers?:HeadersInit}={}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation {
                    delete_user
                        
                }
                `,{},headers,'delete_user')
                }

async add_push_token({args,  headers}:{args?: AddPushTokenArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($platform: Platform,$token: String) {
                    add_push_token(platform:$platform,token:$token)
                        
                }
                `,args || {},headers,'add_push_token')
                }

async clear_push_tokens({  headers}:{  headers?:HeadersInit}={}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation {
                    clear_push_tokens
                        
                }
                `,{},headers,'clear_push_tokens')
                }

async change_user_password({args,  headers}:{args: ChangeUserPasswordArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($previous_password: String!,$proposed_password: String!) {
                    change_user_password(previous_password:$previous_password,proposed_password:$proposed_password)
                        
                }
                `,args || {},headers,'change_user_password')
                }

async update_user_password({args,  headers}:{args: UpdateUserPasswordArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String!,$password: String!) {
                    update_user_password(user_id:$user_id,password:$password)
                        
                }
                `,args || {},headers,'update_user_password')
                }

async update_user({args, fields,  headers}:{args: UpdateUserArgs, fields:((keyof User) | Partial<Record<keyof User,any[]>>)[], headers?:HeadersInit}):Promise<User>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($parent_user_id: String,$username: String,$email: String,$language: String,$timezone: String,$primary_market_currency: String,$is_active: ToggleSwitch,$mfa_for_withdraw: ToggleSwitch,$updated_at: String,$crypto_pay: ToggleSwitch,$user_id: String,$favorite_instruments: [string!]!,$favorite_addresses_crypto: [FavoriteAddressCryptoItem!]!,$favorite_fiat_destinations: [FavoriteFiatDestinationItem!]!,$notifications_settings: [NotificationTrigger!]!,$client_custom_properties: [ClientCustomPropertyItem!]!,$notifications_options: NotificationOptionsArgs,$mfa_token: String,$mfa_status: ToggleSwitch,$full_name: String,$default_timezone: ToggleSwitch,$client_user_id: String,$permissions: [Permission!]!) {
                    update_user(parent_user_id:$parent_user_id,username:$username,email:$email,language:$language,timezone:$timezone,primary_market_currency:$primary_market_currency,is_active:$is_active,mfa_for_withdraw:$mfa_for_withdraw,updated_at:$updated_at,crypto_pay:$crypto_pay,user_id:$user_id,favorite_instruments:$favorite_instruments,favorite_addresses_crypto:$favorite_addresses_crypto,favorite_fiat_destinations:$favorite_fiat_destinations,notifications_settings:$notifications_settings,client_custom_properties:$client_custom_properties,notifications_options:$notifications_options,mfa_token:$mfa_token,mfa_status:$mfa_status,full_name:$full_name,default_timezone:$default_timezone,client_user_id:$client_user_id,permissions:$permissions)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'update_user')
                }

async create_user({args, fields,  headers}:{args: CreateUserArgs, fields:((keyof User) | Partial<Record<keyof User,any[]>>)[], headers?:HeadersInit}):Promise<User>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String,$parent_user_id: String,$email: String,$language: String,$timezone: String,$primary_market_currency: String,$fee_group_id: String,$limit_group_id: String,$crypto_pay: ToggleSwitch,$username: String!,$cognito_registration: ToggleSwitch,$cognito_email: ToggleSwitch,$permissions: [Permission!]!,$mfa_secret: String,$first_name: String,$last_name: String,$password: String,$password_hash: String,$client_user_id: String,$client_custom_properties: [ClientCustomPropertyItem!]!) {
                    create_user(user_id:$user_id,parent_user_id:$parent_user_id,email:$email,language:$language,timezone:$timezone,primary_market_currency:$primary_market_currency,fee_group_id:$fee_group_id,limit_group_id:$limit_group_id,crypto_pay:$crypto_pay,username:$username,cognito_registration:$cognito_registration,cognito_email:$cognito_email,permissions:$permissions,mfa_secret:$mfa_secret,first_name:$first_name,last_name:$last_name,password:$password,password_hash:$password_hash,client_user_id:$client_user_id,client_custom_properties:$client_custom_properties)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_user')
                }

async update_anti_phishing_code({args,  headers}:{args: UpdateAntiPhishingCodeArgs,  headers?:HeadersInit}):Promise<string>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($anti_phishing_code: String!,$token: String!) {
                    update_anti_phishing_code(anti_phishing_code:$anti_phishing_code,token:$token)
                        
                }
                `,args || {},headers,'update_anti_phishing_code')
                }

async create_account_transaction({args, fields,  headers}:{args: CreateAccountTransactionArgs, fields:((keyof CreateAccountTransactionResult) | Partial<Record<keyof CreateAccountTransactionResult,any[]>>)[], headers?:HeadersInit}):Promise<CreateAccountTransactionResult>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($items: [RecordTransactionItem!]!) {
                    create_account_transaction(items:$items)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_account_transaction')
                }

async create_limit_group({args, fields,  headers}:{args: CreateLimitGroupArgs, fields:((keyof LimitGroup) | Partial<Record<keyof LimitGroup,any[]>>)[], headers?:HeadersInit}):Promise<LimitGroup>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String,$description: String,$kyc_status: UserKycStatus,$meta: String,$limit_group_id: String,$disabled_currencies: [string!]!,$disabled_instruments: [string!]!,$disabled_payment_routes: [string!]!,$aggregated_payment_limit: CreateAggregatedPaymentLimitArgs) {
                    create_limit_group(name:$name,description:$description,kyc_status:$kyc_status,meta:$meta,limit_group_id:$limit_group_id,disabled_currencies:$disabled_currencies,disabled_instruments:$disabled_instruments,disabled_payment_routes:$disabled_payment_routes,aggregated_payment_limit:$aggregated_payment_limit)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_limit_group')
                }

async update_limit_group({args,  headers}:{args: UpdateLimitGroupArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String,$description: String,$kyc_status: UserKycStatus,$meta: String,$limit_group_id: String,$serial_ids: [number!]!,$disabled_currencies: [string!]!,$disabled_payment_routes: [string!]!,$disabled_instruments: [string!]!,$aggregated_payment_limit: UpdateAggregatedPaymentLimitArgs) {
                    update_limit_group(name:$name,description:$description,kyc_status:$kyc_status,meta:$meta,limit_group_id:$limit_group_id,serial_ids:$serial_ids,disabled_currencies:$disabled_currencies,disabled_payment_routes:$disabled_payment_routes,disabled_instruments:$disabled_instruments,aggregated_payment_limit:$aggregated_payment_limit)
                        
                }
                `,args || {},headers,'update_limit_group')
                }

async delete_limit_group({args,  headers}:{args: DeleteLimitGroupArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($serial_id: Int,$serial_ids: [number!]!) {
                    delete_limit_group(serial_id:$serial_id,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'delete_limit_group')
                }

async create_fee_group({args, fields,  headers}:{args?: CreateFeeGroupArgs, fields:((keyof FeeGroup) | Partial<Record<keyof FeeGroup,any[]>>)[], headers?:HeadersInit}):Promise<FeeGroup>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String,$description: String,$kyc_status: UserKycStatus,$meta: String,$beneficiary_user_id: String,$fee_group_id: String) {
                    create_fee_group(name:$name,description:$description,kyc_status:$kyc_status,meta:$meta,beneficiary_user_id:$beneficiary_user_id,fee_group_id:$fee_group_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_fee_group')
                }

async update_fee_group({args,  headers}:{args: UpdateFeeGroupArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String,$description: String,$beneficiary_user_id: String,$kyc_status: UserKycStatus,$meta: String,$fee_group_id: String,$serial_ids: [number!]!) {
                    update_fee_group(name:$name,description:$description,beneficiary_user_id:$beneficiary_user_id,kyc_status:$kyc_status,meta:$meta,fee_group_id:$fee_group_id,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'update_fee_group')
                }

async delete_fee_group({args,  headers}:{args: DeleteFeeGroupArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($serial_id: Int,$serial_ids: [number!]!) {
                    delete_fee_group(serial_id:$serial_id,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'delete_fee_group')
                }

async estimate_payment_fee({args,  headers}:{args: EstimatePaymentFeeArgs,  headers?:HeadersInit}):Promise<number>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String,$payment_route_id: String,$currency_id: String,$psp_service_id: String,$crypto_network: String,$type: PaymentType!,$amount: Float!,$crypto_network_fee_preference: CryptoNetworkFeePreference,$crypto_address: String,$crypto_address_tag_type: CryptoAddressTagType,$crypto_address_tag_value: String) {
                    estimate_payment_fee(user_id:$user_id,payment_route_id:$payment_route_id,currency_id:$currency_id,psp_service_id:$psp_service_id,crypto_network:$crypto_network,type:$type,amount:$amount,crypto_network_fee_preference:$crypto_network_fee_preference,crypto_address:$crypto_address,crypto_address_tag_type:$crypto_address_tag_type,crypto_address_tag_value:$crypto_address_tag_value)
                        
                }
                `,args || {},headers,'estimate_payment_fee')
                }

async estimate_network_fee({args, fields,  headers}:{args: EstimateNetworkFeeArgs, fields:((keyof EstimateNetworkFeeResult) | Partial<Record<keyof EstimateNetworkFeeResult,any[]>>)[], headers?:HeadersInit}):Promise<EstimateNetworkFeeResult>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($currency_id: String!,$network: String,$psp_service_id: String,$amount: Float,$crypto_address: String,$crypto_address_tag_type: CryptoAddressTagType,$crypto_address_tag_value: String) {
                    estimate_network_fee(currency_id:$currency_id,network:$network,psp_service_id:$psp_service_id,amount:$amount,crypto_address:$crypto_address,crypto_address_tag_type:$crypto_address_tag_type,crypto_address_tag_value:$crypto_address_tag_value)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'estimate_network_fee')
                }

async update_payment_fee({args,  headers}:{args: UpdatePaymentFeeArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($currency_id: String,$fee_group_id: String,$withdrawal_progressive_fee: Float,$withdrawal_flat_fee: Float,$deposit_progressive_fee: Float,$deposit_flat_fee: Float,$payment_route_id: String,$fiat_transfer_type: String,$crypto_network: String,$calculation_type: FeeCalculationType,$serial_id: Int,$serial_ids: [number!]!) {
                    update_payment_fee(currency_id:$currency_id,fee_group_id:$fee_group_id,withdrawal_progressive_fee:$withdrawal_progressive_fee,withdrawal_flat_fee:$withdrawal_flat_fee,deposit_progressive_fee:$deposit_progressive_fee,deposit_flat_fee:$deposit_flat_fee,payment_route_id:$payment_route_id,fiat_transfer_type:$fiat_transfer_type,crypto_network:$crypto_network,calculation_type:$calculation_type,serial_id:$serial_id,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'update_payment_fee')
                }

async create_trading_fee({args, fields,  headers}:{args: CreateTradingFeeArgs, fields:((keyof TradingFee) | Partial<Record<keyof TradingFee,any[]>>)[], headers?:HeadersInit}):Promise<TradingFee>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($instrument_id: String!,$fee_group_id: String!,$maker_progressive: Float!,$taker_progressive: Float!,$maker_flat: Float!,$taker_flat: Float!) {
                    create_trading_fee(instrument_id:$instrument_id,fee_group_id:$fee_group_id,maker_progressive:$maker_progressive,taker_progressive:$taker_progressive,maker_flat:$maker_flat,taker_flat:$taker_flat)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_trading_fee')
                }

async update_trading_fee({args,  headers}:{args: UpdateTradingFeeArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($serial_id: Int,$maker_progressive: Float,$taker_progressive: Float,$maker_flat: Float,$taker_flat: Float,$instrument_id: String,$fee_group_id: String,$serial_ids: [number!]!) {
                    update_trading_fee(serial_id:$serial_id,maker_progressive:$maker_progressive,taker_progressive:$taker_progressive,maker_flat:$maker_flat,taker_flat:$taker_flat,instrument_id:$instrument_id,fee_group_id:$fee_group_id,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'update_trading_fee')
                }

async delete_trading_fee({args,  headers}:{args: DeleteTradingFeeArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($serial_id: Int,$serial_ids: [number!]!,$instrument_id: String,$fee_group_id: String) {
                    delete_trading_fee(serial_id:$serial_id,serial_ids:$serial_ids,instrument_id:$instrument_id,fee_group_id:$fee_group_id)
                        
                }
                `,args || {},headers,'delete_trading_fee')
                }

async create_payment_session({args,  headers}:{args: CreatePaymentSessionArgs,  headers?:HeadersInit}):Promise<string>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($payment_route_id: String!,$payment_type: PaymentType!,$mfa_token: String) {
                    create_payment_session(payment_route_id:$payment_route_id,payment_type:$payment_type,mfa_token:$mfa_token)
                        
                }
                `,args || {},headers,'create_payment_session')
                }

async create_payment_route({args, fields,  headers}:{args: CreatePaymentRouteArgs, fields:((keyof PaymentRoute) | Partial<Record<keyof PaymentRoute,any[]>>)[], headers?:HeadersInit}):Promise<PaymentRoute>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($currency_id: String!,$psp_service_id: String!,$name: String,$crypto_network: String,$crypto_address_generate_new: ToggleSwitch,$crypto_address_tag_type: CryptoAddressTagType,$fiat_iframe_deposit_url: String,$fiat_iframe_withdrawal_url: String,$fiat_transfer_type: String,$is_active: ToggleSwitch!,$extend_network_fee: ToggleSwitch,$network_fee_currency_id: String,$is_development: ToggleSwitch,$verification_type: VerificationType,$fiat_deposit_properties: [FiatDepositPropertyInput!]!,$deposit_enabled: ToggleSwitch,$withdrawal_enabled: ToggleSwitch,$is_crypto_to_fiat: ToggleSwitch,$meta: String) {
                    create_payment_route(currency_id:$currency_id,psp_service_id:$psp_service_id,name:$name,crypto_network:$crypto_network,crypto_address_generate_new:$crypto_address_generate_new,crypto_address_tag_type:$crypto_address_tag_type,fiat_iframe_deposit_url:$fiat_iframe_deposit_url,fiat_iframe_withdrawal_url:$fiat_iframe_withdrawal_url,fiat_transfer_type:$fiat_transfer_type,is_active:$is_active,extend_network_fee:$extend_network_fee,network_fee_currency_id:$network_fee_currency_id,is_development:$is_development,verification_type:$verification_type,fiat_deposit_properties:$fiat_deposit_properties,deposit_enabled:$deposit_enabled,withdrawal_enabled:$withdrawal_enabled,is_crypto_to_fiat:$is_crypto_to_fiat,meta:$meta)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_payment_route')
                }

async delete_payment_route({args,  headers}:{args: DeletePaymentRouteArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($payment_route_id: String!) {
                    delete_payment_route(payment_route_id:$payment_route_id)
                        
                }
                `,args || {},headers,'delete_payment_route')
                }

async update_payment_route({args,  headers}:{args: UpdatePaymentRouteArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($currency_id: String,$psp_service_id: String,$name: String,$crypto_network: String,$crypto_address_tag_type: CryptoAddressTagType,$fiat_iframe_deposit_url: String,$fiat_iframe_withdrawal_url: String,$fiat_transfer_type: String,$is_active: ToggleSwitch,$network_fee_currency_id: String,$fiat_deposit_properties: [FiatDepositPropertyInput!]!,$is_crypto_to_fiat: ToggleSwitch,$meta: String,$payment_route_id: String,$serial_ids: [number!]!,$crypto_address_generate_new: ToggleSwitch,$verification_type: VerificationType,$extend_network_fee: ToggleSwitch,$is_development: ToggleSwitch,$withdrawal_enabled: ToggleSwitch,$deposit_enabled: ToggleSwitch) {
                    update_payment_route(currency_id:$currency_id,psp_service_id:$psp_service_id,name:$name,crypto_network:$crypto_network,crypto_address_tag_type:$crypto_address_tag_type,fiat_iframe_deposit_url:$fiat_iframe_deposit_url,fiat_iframe_withdrawal_url:$fiat_iframe_withdrawal_url,fiat_transfer_type:$fiat_transfer_type,is_active:$is_active,network_fee_currency_id:$network_fee_currency_id,fiat_deposit_properties:$fiat_deposit_properties,is_crypto_to_fiat:$is_crypto_to_fiat,meta:$meta,payment_route_id:$payment_route_id,serial_ids:$serial_ids,crypto_address_generate_new:$crypto_address_generate_new,verification_type:$verification_type,extend_network_fee:$extend_network_fee,is_development:$is_development,withdrawal_enabled:$withdrawal_enabled,deposit_enabled:$deposit_enabled)
                        
                }
                `,args || {},headers,'update_payment_route')
                }

async create_payment_limit({args, fields,  headers}:{args: CreatePaymentLimitArgs, fields:((keyof PaymentLimit) | Partial<Record<keyof PaymentLimit,any[]>>)[], headers?:HeadersInit}):Promise<PaymentLimit>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($limit_group_id: String!,$currency_id: String!,$deposit_enabled: ToggleSwitch!,$deposit_min_amount: Float!,$deposit_daily_limit: Float,$deposit_weekly_limit: Float,$deposit_monthly_limit: Float,$deposit_auto_approval_amount: Float!,$withdrawal_enabled: ToggleSwitch!,$withdrawal_min_amount: Float!,$withdrawal_daily_limit: Float,$withdrawal_weekly_limit: Float,$withdrawal_monthly_limit: Float,$withdrawal_auto_approval_amount: Float!,$auto_reject: ToggleSwitch!) {
                    create_payment_limit(limit_group_id:$limit_group_id,currency_id:$currency_id,deposit_enabled:$deposit_enabled,deposit_min_amount:$deposit_min_amount,deposit_daily_limit:$deposit_daily_limit,deposit_weekly_limit:$deposit_weekly_limit,deposit_monthly_limit:$deposit_monthly_limit,deposit_auto_approval_amount:$deposit_auto_approval_amount,withdrawal_enabled:$withdrawal_enabled,withdrawal_min_amount:$withdrawal_min_amount,withdrawal_daily_limit:$withdrawal_daily_limit,withdrawal_weekly_limit:$withdrawal_weekly_limit,withdrawal_monthly_limit:$withdrawal_monthly_limit,withdrawal_auto_approval_amount:$withdrawal_auto_approval_amount,auto_reject:$auto_reject)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_payment_limit')
                }

async update_payment_limit({args,  headers}:{args: UpdatePaymentLimitArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($limit_group_id: String,$currency_id: String,$deposit_enabled: ToggleSwitch,$deposit_min_amount: Float,$deposit_auto_approval_amount: Float,$withdrawal_enabled: ToggleSwitch,$withdrawal_min_amount: Float,$withdrawal_auto_approval_amount: Float,$notion_currency: String,$deposit_daily_limit: Float,$deposit_weekly_limit: Float,$deposit_monthly_limit: Float,$withdrawal_daily_limit: Float,$withdrawal_weekly_limit: Float,$withdrawal_monthly_limit: Float,$serial_ids: [number!]!,$auto_reject: ToggleSwitch) {
                    update_payment_limit(limit_group_id:$limit_group_id,currency_id:$currency_id,deposit_enabled:$deposit_enabled,deposit_min_amount:$deposit_min_amount,deposit_auto_approval_amount:$deposit_auto_approval_amount,withdrawal_enabled:$withdrawal_enabled,withdrawal_min_amount:$withdrawal_min_amount,withdrawal_auto_approval_amount:$withdrawal_auto_approval_amount,notion_currency:$notion_currency,deposit_daily_limit:$deposit_daily_limit,deposit_weekly_limit:$deposit_weekly_limit,deposit_monthly_limit:$deposit_monthly_limit,withdrawal_daily_limit:$withdrawal_daily_limit,withdrawal_weekly_limit:$withdrawal_weekly_limit,withdrawal_monthly_limit:$withdrawal_monthly_limit,serial_ids:$serial_ids,auto_reject:$auto_reject)
                        
                }
                `,args || {},headers,'update_payment_limit')
                }

async delete_payment_limit({args,  headers}:{args: DeletePaymentLimitArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($serial_id: Float,$serial_ids: [number!]!) {
                    delete_payment_limit(serial_id:$serial_id,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'delete_payment_limit')
                }

async create_api_key({args, fields,  headers}:{args: CreateApiKeyArgs, fields:((keyof CreateApiKeyResult) | Partial<Record<keyof CreateApiKeyResult,any[]>>)[], headers?:HeadersInit}):Promise<CreateApiKeyResult>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String,$expires_at: String!,$is_active: ToggleSwitch!,$type: ApiKeyTypes!,$user_id: String,$ip_address: [string!]!,$permissions: [Permission!]!) {
                    create_api_key(name:$name,expires_at:$expires_at,is_active:$is_active,type:$type,user_id:$user_id,ip_address:$ip_address,permissions:$permissions)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_api_key')
                }

async update_api_key({args,  headers}:{args: UpdateApiKeyArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String,$expires_at: String,$is_active: ToggleSwitch,$user_id: String,$api_key_id: String!,$ip_address: [string!]!,$permissions: [Permission!]!) {
                    update_api_key(name:$name,expires_at:$expires_at,is_active:$is_active,user_id:$user_id,api_key_id:$api_key_id,ip_address:$ip_address,permissions:$permissions)
                        
                }
                `,args || {},headers,'update_api_key')
                }

async delete_api_key({args,  headers}:{args: DeleteApiKeyArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($api_key_id: String!,$user_id: String) {
                    delete_api_key(api_key_id:$api_key_id,user_id:$user_id)
                        
                }
                `,args || {},headers,'delete_api_key')
                }

async update_service_api_key({  headers}:{  headers?:HeadersInit}={}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation {
                    update_service_api_key
                        
                }
                `,{},headers,'update_service_api_key')
                }

async create_cognito_pool({args, fields,  headers}:{args: CreateCognitoPoolArgs, fields:((keyof CognitoPool) | Partial<Record<keyof CognitoPool,any[]>>)[], headers?:HeadersInit}):Promise<CognitoPool>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($cognito_pool_id: String!,$role: Role!,$jwks: String!,$name: String,$is_active: ToggleSwitch) {
                    create_cognito_pool(cognito_pool_id:$cognito_pool_id,role:$role,jwks:$jwks,name:$name,is_active:$is_active)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_cognito_pool')
                }

async update_cognito_pool({args,  headers}:{args: UpdateCognitoPoolArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String,$role: Role,$jwks: String,$is_active: ToggleSwitch,$cognito_pool_id: String!) {
                    update_cognito_pool(name:$name,role:$role,jwks:$jwks,is_active:$is_active,cognito_pool_id:$cognito_pool_id)
                        
                }
                `,args || {},headers,'update_cognito_pool')
                }

async delete_cognito_pool({args,  headers}:{args: DeleteCognitoPoolArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($cognito_pool_id: String,$multiple_pool_ids: [string!]!) {
                    delete_cognito_pool(cognito_pool_id:$cognito_pool_id,multiple_pool_ids:$multiple_pool_ids)
                        
                }
                `,args || {},headers,'delete_cognito_pool')
                }

async create_instrument_strategy({args, fields,  headers}:{args: CreateInstrumentStrategyArgs, fields:((keyof InstrumentStrategy) | Partial<Record<keyof InstrumentStrategy,any[]>>)[], headers?:HeadersInit}):Promise<InstrumentStrategy>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($hedging_adapter_id: String!,$instrument_id: String!,$remote_instrument_id: String,$loop_interval: Int!,$active_layers_count: Int!,$layer_discount_factor: Float!,$markup_ask: Float!,$markup_bid: Float!,$order_min_quantity: Float!,$order_max_quantity: Float!,$hedge_quantity_trigger_buy: Float!,$hedge_quantity_trigger_sell: Float!,$hedge_quantity_increment: Float!,$conversions_balance: Int,$hedging_enabled: ToggleSwitch,$hedging_order_type: OrderType,$hedging_order_time_in_force: OrderTimeInForce,$hedging_order_price: InstrumentStrategyHedgingOrderPrice,$hedging_order_ttl_ms: Int,$hedging_error_attempts_threshold: Int,$hedging_error_attempts_count: Int,$disable_hedging_on_error_attempts_threshold_exceeded: ToggleSwitch,$disable_strategy_on_error_attempts_threshold_exceeded: ToggleSwitch,$instruments_settings_sync_enabled: ToggleSwitch,$strategy_settings_sync_enabled: ToggleSwitch,$meta: String,$is_active: ToggleSwitch!,$version: Int,$min_spread: Float,$on_min_spread_violation: OnMinSpreadViolation,$maximum_publish_quantity: Float) {
                    create_instrument_strategy(hedging_adapter_id:$hedging_adapter_id,instrument_id:$instrument_id,remote_instrument_id:$remote_instrument_id,loop_interval:$loop_interval,active_layers_count:$active_layers_count,layer_discount_factor:$layer_discount_factor,markup_ask:$markup_ask,markup_bid:$markup_bid,order_min_quantity:$order_min_quantity,order_max_quantity:$order_max_quantity,hedge_quantity_trigger_buy:$hedge_quantity_trigger_buy,hedge_quantity_trigger_sell:$hedge_quantity_trigger_sell,hedge_quantity_increment:$hedge_quantity_increment,conversions_balance:$conversions_balance,hedging_enabled:$hedging_enabled,hedging_order_type:$hedging_order_type,hedging_order_time_in_force:$hedging_order_time_in_force,hedging_order_price:$hedging_order_price,hedging_order_ttl_ms:$hedging_order_ttl_ms,hedging_error_attempts_threshold:$hedging_error_attempts_threshold,hedging_error_attempts_count:$hedging_error_attempts_count,disable_hedging_on_error_attempts_threshold_exceeded:$disable_hedging_on_error_attempts_threshold_exceeded,disable_strategy_on_error_attempts_threshold_exceeded:$disable_strategy_on_error_attempts_threshold_exceeded,instruments_settings_sync_enabled:$instruments_settings_sync_enabled,strategy_settings_sync_enabled:$strategy_settings_sync_enabled,meta:$meta,is_active:$is_active,version:$version,min_spread:$min_spread,on_min_spread_violation:$on_min_spread_violation,maximum_publish_quantity:$maximum_publish_quantity)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_instrument_strategy')
                }

async update_instrument_strategy({args,  headers}:{args: UpdateInstrumentStrategyArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($hedging_adapter_id: String,$instrument_id: String,$remote_instrument_id: String,$loop_interval: Int,$active_layers_count: Int,$layer_discount_factor: Float,$markup_ask: Float,$markup_bid: Float,$order_min_quantity: Float,$order_max_quantity: Float,$hedge_quantity_trigger_buy: Float,$hedge_quantity_trigger_sell: Float,$hedge_quantity_increment: Float,$hedging_order_ttl_ms: Int,$meta: String,$is_active: ToggleSwitch,$version: Int,$min_spread: Float,$on_min_spread_violation: OnMinSpreadViolation,$hedging_enabled: ToggleSwitch,$hedging_order_price: InstrumentStrategyHedgingOrderPrice,$hedging_order_type: OrderType,$instruments_settings_sync_enabled: ToggleSwitch,$strategy_settings_sync_enabled: ToggleSwitch,$disable_hedging_on_error_attempts_threshold_exceeded: ToggleSwitch,$disable_strategy_on_error_attempts_threshold_exceeded: ToggleSwitch,$hedging_error_attempts_threshold: Int,$hedging_order_time_in_force: OrderTimeInForce,$hedging_error_attempts_count: Int,$maximum_publish_quantity: Float,$instrument_strategy_id: String,$serial_ids: [number!]!) {
                    update_instrument_strategy(hedging_adapter_id:$hedging_adapter_id,instrument_id:$instrument_id,remote_instrument_id:$remote_instrument_id,loop_interval:$loop_interval,active_layers_count:$active_layers_count,layer_discount_factor:$layer_discount_factor,markup_ask:$markup_ask,markup_bid:$markup_bid,order_min_quantity:$order_min_quantity,order_max_quantity:$order_max_quantity,hedge_quantity_trigger_buy:$hedge_quantity_trigger_buy,hedge_quantity_trigger_sell:$hedge_quantity_trigger_sell,hedge_quantity_increment:$hedge_quantity_increment,hedging_order_ttl_ms:$hedging_order_ttl_ms,meta:$meta,is_active:$is_active,version:$version,min_spread:$min_spread,on_min_spread_violation:$on_min_spread_violation,hedging_enabled:$hedging_enabled,hedging_order_price:$hedging_order_price,hedging_order_type:$hedging_order_type,instruments_settings_sync_enabled:$instruments_settings_sync_enabled,strategy_settings_sync_enabled:$strategy_settings_sync_enabled,disable_hedging_on_error_attempts_threshold_exceeded:$disable_hedging_on_error_attempts_threshold_exceeded,disable_strategy_on_error_attempts_threshold_exceeded:$disable_strategy_on_error_attempts_threshold_exceeded,hedging_error_attempts_threshold:$hedging_error_attempts_threshold,hedging_order_time_in_force:$hedging_order_time_in_force,hedging_error_attempts_count:$hedging_error_attempts_count,maximum_publish_quantity:$maximum_publish_quantity,instrument_strategy_id:$instrument_strategy_id,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'update_instrument_strategy')
                }

async update_instrument_strategy_hedge_balance({args,  headers}:{args: UpdateInstrumentStrategyHedgeBalanceArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($instrument_strategy_id: String!,$new_hedge_balance: Float!,$old_hedge_balance: Float!) {
                    update_instrument_strategy_hedge_balance(instrument_strategy_id:$instrument_strategy_id,new_hedge_balance:$new_hedge_balance,old_hedge_balance:$old_hedge_balance)
                        
                }
                `,args || {},headers,'update_instrument_strategy_hedge_balance')
                }

async operate_instrument_strategy_hedge_balance({args,  headers}:{args: OperateInstrumentStrategyHedgeBalanceArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($instrument_strategy_id: String!,$side: OrderSide!,$amount: Float!,$reference: String!,$reference_id: String!) {
                    operate_instrument_strategy_hedge_balance(instrument_strategy_id:$instrument_strategy_id,side:$side,amount:$amount,reference:$reference,reference_id:$reference_id)
                        
                }
                `,args || {},headers,'operate_instrument_strategy_hedge_balance')
                }

async delete_instrument_strategy({args,  headers}:{args: DeleteInstrumentStrategyArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($serial_id: Float,$serial_ids: [number!]!) {
                    delete_instrument_strategy(serial_id:$serial_id,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'delete_instrument_strategy')
                }

async trigger_create_hedging_remote_order_job({args,  headers}:{args: TriggerCreateHedgingRemoteOrderJobArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($hedging_order_id: String!) {
                    trigger_create_hedging_remote_order_job(hedging_order_id:$hedging_order_id)
                        
                }
                `,args || {},headers,'trigger_create_hedging_remote_order_job')
                }

async trigger_complete_hedging_remote_order_job({args,  headers}:{args: TriggerCompleteHedgingRemoteOrderJobArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($hedging_order_id: String!) {
                    trigger_complete_hedging_remote_order_job(hedging_order_id:$hedging_order_id)
                        
                }
                `,args || {},headers,'trigger_complete_hedging_remote_order_job')
                }

async trigger_reject_hedging_remote_order_job({args,  headers}:{args: TriggerRejectHedgingRemoteOrderJobArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($hedging_order_id: String!,$status: HedgingOrderStatus!,$message: String!) {
                    trigger_reject_hedging_remote_order_job(hedging_order_id:$hedging_order_id,status:$status,message:$message)
                        
                }
                `,args || {},headers,'trigger_reject_hedging_remote_order_job')
                }

async update_system_setting({args,  headers}:{args: UpdateSystemSettingArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String!,$value: String) {
                    update_system_setting(name:$name,value:$value)
                        
                }
                `,args || {},headers,'update_system_setting')
                }

async update_system_settings({args,  headers}:{args: UpdateSystemSettingsArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($items: [SettingItem!]!) {
                    update_system_settings(items:$items)
                        
                }
                `,args || {},headers,'update_system_settings')
                }

async update_maintenance_mode({args,  headers}:{args: UpdateMaintenanceModeArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($maintenance_mode: ToggleSwitch!,$maintenance_message: String!) {
                    update_maintenance_mode(maintenance_mode:$maintenance_mode,maintenance_message:$maintenance_message)
                        
                }
                `,args || {},headers,'update_maintenance_mode')
                }

async update_notifications_settings({args, fields,  headers}:{args: UpdateNotificationsSettingsArgs, fields:((keyof NotificationOptions) | Partial<Record<keyof NotificationOptions,any[]>>)[], headers?:HeadersInit}):Promise<NotificationOptions>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($client: [NotificationTrigger!]!,$push: [NotificationTrigger!]!,$email: [NotificationTrigger!]!,$sms: [NotificationTrigger!]!) {
                    update_notifications_settings(client:$client,push:$push,email:$email,sms:$sms)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'update_notifications_settings')
                }

async update_default_notifications({args,  headers}:{args: UpdateDefaultNotificationsArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($enable_email_notifications_by_default: ToggleSwitch!) {
                    update_default_notifications(enable_email_notifications_by_default:$enable_email_notifications_by_default)
                        
                }
                `,args || {},headers,'update_default_notifications')
                }

async update_delayed_mutations({args,  headers}:{args: UpdateDelayedMutationsArgs,  headers?:HeadersInit}):Promise<string[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($mutations: [string!]!) {
                    update_delayed_mutations(mutations:$mutations)
                        
                }
                `,args || {},headers,'update_delayed_mutations')
                }

async update_geo_restrictions({args, fields,  headers}:{args?: UpdateGeoRestrictionsArgs, fields:((keyof GeoRestrictions) | Partial<Record<keyof GeoRestrictions,any[]>>)[], headers?:HeadersInit}):Promise<GeoRestrictions>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($region_blacklist: [RegionBlacklistItemInput!],$country_blacklist: [BlacklistItemInput!]) {
                    update_geo_restrictions(region_blacklist:$region_blacklist,country_blacklist:$country_blacklist)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'update_geo_restrictions')
                }

async update_admin_permissions({args,  headers}:{args: UpdateAdminPermissionsArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($users_ids: [string!]!,$subjects: [string!]!) {
                    update_admin_permissions(users_ids:$users_ids,subjects:$subjects)
                        
                }
                `,args || {},headers,'update_admin_permissions')
                }

async create_kyc_manual_request({args,  headers}:{args: CreateKycManualRequestArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String!,$kyc_data: [KycUserDataEntryInput!]!) {
                    create_kyc_manual_request(user_id:$user_id,kyc_data:$kyc_data)
                        
                }
                `,args || {},headers,'create_kyc_manual_request')
                }

async create_kyc_session({args,  headers}:{args?: CreateKycSessionArgs,  headers?:HeadersInit}):Promise<string>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($kyc_type: KycType,$user_id: String) {
                    create_kyc_session(kyc_type:$kyc_type,user_id:$user_id)
                        
                }
                `,args || {},headers,'create_kyc_session')
                }

async update_kyc_preferences({args, fields,  headers}:{args?: UpdateKycPreferencesArgs, fields:((keyof KycPreferences) | Partial<Record<keyof KycPreferences,any[]>>)[], headers?:HeadersInit}):Promise<KycPreferences>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($individual: KycPreferenceInput,$corporate: KycPreferenceInput) {
                    update_kyc_preferences(individual:$individual,corporate:$corporate)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'update_kyc_preferences')
                }

async create_webhook({args, fields,  headers}:{args: CreateWebhookArgs, fields:((keyof Webhook) | Partial<Record<keyof Webhook,any[]>>)[], headers?:HeadersInit}):Promise<Webhook>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String!,$is_active: ToggleSwitch!,$user_id: String,$url: String!,$triggers: [NotificationTrigger!]!) {
                    create_webhook(name:$name,is_active:$is_active,user_id:$user_id,url:$url,triggers:$triggers)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_webhook')
                }

async update_webhook({args,  headers}:{args: UpdateWebhookArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String,$is_active: ToggleSwitch,$webhook_id: String!,$url: String,$triggers: [NotificationTrigger!]!) {
                    update_webhook(name:$name,is_active:$is_active,webhook_id:$webhook_id,url:$url,triggers:$triggers)
                        
                }
                `,args || {},headers,'update_webhook')
                }

async delete_webhook({args,  headers}:{args: DeleteWebhookArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($webhook_id: String!) {
                    delete_webhook(webhook_id:$webhook_id)
                        
                }
                `,args || {},headers,'delete_webhook')
                }

async emit_event({args,  headers}:{args: EmitEventArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($event: NotificationTrigger!,$payload: String!) {
                    emit_event(event:$event,payload:$payload)
                        
                }
                `,args || {},headers,'emit_event')
                }

async create_hedging_adapter({args, fields,  headers}:{args: CreateHedgingAdapterArgs, fields:((keyof HedgingAdapter) | Partial<Record<keyof HedgingAdapter,any[]>>)[], headers?:HeadersInit}):Promise<HedgingAdapter>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($hedging_adapter_id: String!,$service_url: String!,$service_api_key: String!,$broker_user_id: String!,$hedging_enabled: ToggleSwitch!,$account_balances_sync_enabled: ToggleSwitch!,$meta: String,$maker_fee: Float,$taker_fee: Float,$fees_sync_enabled: ToggleSwitch,$create_broker_user_id: Boolean) {
                    create_hedging_adapter(hedging_adapter_id:$hedging_adapter_id,service_url:$service_url,service_api_key:$service_api_key,broker_user_id:$broker_user_id,hedging_enabled:$hedging_enabled,account_balances_sync_enabled:$account_balances_sync_enabled,meta:$meta,maker_fee:$maker_fee,taker_fee:$taker_fee,fees_sync_enabled:$fees_sync_enabled,create_broker_user_id:$create_broker_user_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_hedging_adapter')
                }

async update_hedging_adapter({args,  headers}:{args: UpdateHedgingAdapterArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($service_url: String,$service_api_key: String,$broker_user_id: String,$hedging_enabled: ToggleSwitch,$account_balances_sync_enabled: ToggleSwitch,$meta: String,$maker_fee: Float,$taker_fee: Float,$fees_sync_enabled: ToggleSwitch,$hedging_adapter_id: String!,$create_broker_user_id: Boolean) {
                    update_hedging_adapter(service_url:$service_url,service_api_key:$service_api_key,broker_user_id:$broker_user_id,hedging_enabled:$hedging_enabled,account_balances_sync_enabled:$account_balances_sync_enabled,meta:$meta,maker_fee:$maker_fee,taker_fee:$taker_fee,fees_sync_enabled:$fees_sync_enabled,hedging_adapter_id:$hedging_adapter_id,create_broker_user_id:$create_broker_user_id)
                        
                }
                `,args || {},headers,'update_hedging_adapter')
                }

async delete_hedging_adapter({args,  headers}:{args: DeleteHedgingAdapterArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($hedging_adapter_id: String!) {
                    delete_hedging_adapter(hedging_adapter_id:$hedging_adapter_id)
                        
                }
                `,args || {},headers,'delete_hedging_adapter')
                }

async create_trading_limit({args, fields,  headers}:{args: CreateTradingLimitArgs, fields:((keyof TradingLimit) | Partial<Record<keyof TradingLimit,any[]>>)[], headers?:HeadersInit}):Promise<TradingLimit>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($limit_group_id: String!,$instrument_id: String!,$daily_limit: Float,$weekly_limit: Float,$monthly_limit: Float,$notion_currency: String) {
                    create_trading_limit(limit_group_id:$limit_group_id,instrument_id:$instrument_id,daily_limit:$daily_limit,weekly_limit:$weekly_limit,monthly_limit:$monthly_limit,notion_currency:$notion_currency)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_trading_limit')
                }

async update_trading_limit({args,  headers}:{args?: UpdateTradingLimitArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($limit_group_id: String,$instrument_id: String,$notion_currency: String,$daily_limit: Float,$weekly_limit: Float,$monthly_limit: Float,$serial_ids: Int) {
                    update_trading_limit(limit_group_id:$limit_group_id,instrument_id:$instrument_id,notion_currency:$notion_currency,daily_limit:$daily_limit,weekly_limit:$weekly_limit,monthly_limit:$monthly_limit,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'update_trading_limit')
                }

async delete_trading_limit({args,  headers}:{args: DeleteTradingLimitArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($limit_group_id: String!,$instrument_id: String!) {
                    delete_trading_limit(limit_group_id:$limit_group_id,instrument_id:$instrument_id)
                        
                }
                `,args || {},headers,'delete_trading_limit')
                }

async update_delayed_request({args, fields,  headers}:{args?: UpdateDelayedRequestArgs, fields:((keyof DelayedRequest) | Partial<Record<keyof DelayedRequest,any[]>>)[], headers?:HeadersInit}):Promise<DelayedRequest>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($delayed_request_id: String,$approval_status: DelayedRequestStatus) {
                    update_delayed_request(delayed_request_id:$delayed_request_id,approval_status:$approval_status)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'update_delayed_request')
                }

async delete_delayed_request({args,  headers}:{args?: DeleteDelayedRequestArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($delayed_request_id: String) {
                    delete_delayed_request(delayed_request_id:$delayed_request_id)
                        
                }
                `,args || {},headers,'delete_delayed_request')
                }

async create_user_mfa_secret({ fields,  headers}:{ fields:((keyof CreateUserMfaSecretResult) | Partial<Record<keyof CreateUserMfaSecretResult,any[]>>)[], headers?:HeadersInit}):Promise<CreateUserMfaSecretResult>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation {
                    create_user_mfa_secret
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'create_user_mfa_secret')
                }

async create_admin_mfa_secret({args, fields,  headers}:{args?: CreateAdminMfaSecretArgs, fields:((keyof CreateUserMfaSecretResult) | Partial<Record<keyof CreateUserMfaSecretResult,any[]>>)[], headers?:HeadersInit}):Promise<CreateUserMfaSecretResult>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($email: String) {
                    create_admin_mfa_secret(email:$email)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_admin_mfa_secret')
                }

async update_user_mfa_status({args,  headers}:{args: UpdateUserMfaStatusArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($status: ToggleSwitch!,$secret: String,$token: String!) {
                    update_user_mfa_status(status:$status,secret:$secret,token:$token)
                        
                }
                `,args || {},headers,'update_user_mfa_status')
                }

async update_admin_mfa_status({args,  headers}:{args: UpdateAdminMfaStatusArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($status: ToggleSwitch!,$secret: String,$token: String!) {
                    update_admin_mfa_status(status:$status,secret:$secret,token:$token)
                        
                }
                `,args || {},headers,'update_admin_mfa_status')
                }

async verify_user_mfa_token({args,  headers}:{args: VerifyUserMfaTokenArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($token: String!) {
                    verify_user_mfa_token(token:$token)
                        
                }
                `,args || {},headers,'verify_user_mfa_token')
                }

async verify_admin_mfa_token({args,  headers}:{args: VerifyAdminMfaTokenArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($token: String!) {
                    verify_admin_mfa_token(token:$token)
                        
                }
                `,args || {},headers,'verify_admin_mfa_token')
                }

async send_test_email({args,  headers}:{args: SendTestEmailArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($trigger: NotificationTrigger!,$to: String!) {
                    send_test_email(trigger:$trigger,to:$to)
                        
                }
                `,args || {},headers,'send_test_email')
                }

async send_test_push({args,  headers}:{args: SendTestPushArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($title: String!,$message: String!,$body: String!,$trigger: NotificationTrigger) {
                    send_test_push(title:$title,message:$message,body:$body,trigger:$trigger)
                        
                }
                `,args || {},headers,'send_test_push')
                }

async create_kyc_user_data({args, fields,  headers}:{args: CreateKycUserDataArgs, fields:((keyof KycUserData) | Partial<Record<keyof KycUserData,any[]>>)[], headers?:HeadersInit}):Promise<KycUserData[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String!,$kyc_data: [KycUserDataEntryInput!]!) {
                    create_kyc_user_data(user_id:$user_id,kyc_data:$kyc_data)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_kyc_user_data')
                }

async update_kyc_user_data({args, fields,  headers}:{args: UpdateKycUserDataArgs, fields:((keyof KycUserData) | Partial<Record<keyof KycUserData,any[]>>)[], headers?:HeadersInit}):Promise<KycUserData[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String!,$kyc_data: [KycUserDataEntryInput!]!) {
                    update_kyc_user_data(user_id:$user_id,kyc_data:$kyc_data)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'update_kyc_user_data')
                }

async delete_kyc_user_data({args,  headers}:{args: DeleteKycUserDataArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String!,$kyc_property: String!) {
                    delete_kyc_user_data(user_id:$user_id,kyc_property:$kyc_property)
                        
                }
                `,args || {},headers,'delete_kyc_user_data')
                }

async create_permission_preset({args, fields,  headers}:{args: CreatePermissionPresetArgs, fields:((keyof PermissionPreset) | Partial<Record<keyof PermissionPreset,any[]>>)[], headers?:HeadersInit}):Promise<PermissionPreset>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String!,$subjects: [string!]!,$updated_name: String) {
                    create_permission_preset(name:$name,subjects:$subjects,updated_name:$updated_name)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_permission_preset')
                }

async update_permission_preset({args, fields,  headers}:{args: UpdatePermissionPresetArgs, fields:((keyof PermissionPreset) | Partial<Record<keyof PermissionPreset,any[]>>)[], headers?:HeadersInit}):Promise<PermissionPreset>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String!,$subjects: [string!]!,$updated_name: String) {
                    update_permission_preset(name:$name,subjects:$subjects,updated_name:$updated_name)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'update_permission_preset')
                }

async delete_permission_preset({args,  headers}:{args: DeletePermissionPresetArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String!) {
                    delete_permission_preset(name:$name)
                        
                }
                `,args || {},headers,'delete_permission_preset')
                }

async create_instruments_strategies_schedule({args, fields,  headers}:{args: CreateInstrumentsStrategiesScheduleArgs, fields:((keyof InstrumentsStrategiesSchedule) | Partial<Record<keyof InstrumentsStrategiesSchedule,any[]>>)[], headers?:HeadersInit}):Promise<InstrumentsStrategiesSchedule>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($instrument_strategy_id: String!,$markup_ask: Float!,$markup_bid: Float!,$is_active: ToggleSwitch!,$time_from_day_of_week: DayOfWeek!,$time_from_hours: Int!,$time_from_minutes: Int!,$time_to_day_of_week: DayOfWeek!,$time_to_hours: Int!,$time_to_minutes: Int!) {
                    create_instruments_strategies_schedule(instrument_strategy_id:$instrument_strategy_id,markup_ask:$markup_ask,markup_bid:$markup_bid,is_active:$is_active,time_from_day_of_week:$time_from_day_of_week,time_from_hours:$time_from_hours,time_from_minutes:$time_from_minutes,time_to_day_of_week:$time_to_day_of_week,time_to_hours:$time_to_hours,time_to_minutes:$time_to_minutes)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_instruments_strategies_schedule')
                }

async update_instruments_strategies_schedule({args,  headers}:{args: UpdateInstrumentsStrategiesScheduleArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($instrument_strategy_id: String,$markup_ask: Float,$markup_bid: Float,$is_active: ToggleSwitch,$time_from_day_of_week: DayOfWeek,$time_from_hours: Int,$time_from_minutes: Int,$time_to_day_of_week: DayOfWeek,$time_to_hours: Int,$time_to_minutes: Int,$instruments_strategies_schedule_id: String!) {
                    update_instruments_strategies_schedule(instrument_strategy_id:$instrument_strategy_id,markup_ask:$markup_ask,markup_bid:$markup_bid,is_active:$is_active,time_from_day_of_week:$time_from_day_of_week,time_from_hours:$time_from_hours,time_from_minutes:$time_from_minutes,time_to_day_of_week:$time_to_day_of_week,time_to_hours:$time_to_hours,time_to_minutes:$time_to_minutes,instruments_strategies_schedule_id:$instruments_strategies_schedule_id)
                        
                }
                `,args || {},headers,'update_instruments_strategies_schedule')
                }

async delete_instruments_strategies_schedule({args,  headers}:{args: DeleteInstrumentsStrategiesScheduleArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($instruments_strategies_schedule_id: String!) {
                    delete_instruments_strategies_schedule(instruments_strategies_schedule_id:$instruments_strategies_schedule_id)
                        
                }
                `,args || {},headers,'delete_instruments_strategies_schedule')
                }

async create_currency_price({args, fields,  headers}:{args: CreateCurrencyPriceArgs, fields:((keyof CurrencyPrice) | Partial<Record<keyof CurrencyPrice,any[]>>)[], headers?:HeadersInit}):Promise<CurrencyPrice>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($base_currency_id: String!,$quote_currency_id: String!,$ask: Float!,$bid: Float!,$source: String!) {
                    create_currency_price(base_currency_id:$base_currency_id,quote_currency_id:$quote_currency_id,ask:$ask,bid:$bid,source:$source)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_currency_price')
                }

async update_currency_price({args,  headers}:{args: UpdateCurrencyPriceArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($base_currency_id: String!,$quote_currency_id: String!,$ask: Float!,$bid: Float!,$source: String!) {
                    update_currency_price(base_currency_id:$base_currency_id,quote_currency_id:$quote_currency_id,ask:$ask,bid:$bid,source:$source)
                        
                }
                `,args || {},headers,'update_currency_price')
                }

async delete_currency_price({args,  headers}:{args: DeleteCurrencyPriceArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($base_currency_id: String!,$quote_currency_id: String!,$source: String!) {
                    delete_currency_price(base_currency_id:$base_currency_id,quote_currency_id:$quote_currency_id,source:$source)
                        
                }
                `,args || {},headers,'delete_currency_price')
                }

async set_currency_price({args, fields,  headers}:{args: SetCurrencyPriceArgs, fields:((keyof CurrencyPrice) | Partial<Record<keyof CurrencyPrice,any[]>>)[], headers?:HeadersInit}):Promise<CurrencyPrice>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($base_currency_id: String!,$quote_currency_id: String!,$ask: Float!,$bid: Float!,$source: String!) {
                    set_currency_price(base_currency_id:$base_currency_id,quote_currency_id:$quote_currency_id,ask:$ask,bid:$bid,source:$source)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'set_currency_price')
                }

async create_ip_whitelist_items({args, fields,  headers}:{args: CreateIpWhitelistItemsArgs, fields:((keyof IpWhitelistItem) | Partial<Record<keyof IpWhitelistItem,any[]>>)[], headers?:HeadersInit}):Promise<IpWhitelistItem[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($emails: [string!]!,$ip_address: String,$note: String) {
                    create_ip_whitelist_items(emails:$emails,ip_address:$ip_address,note:$note)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_ip_whitelist_items')
                }

async update_ip_whitelist_item({args,  headers}:{args: UpdateIpWhitelistItemArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($ip_whitelist_id: String!,$note: String) {
                    update_ip_whitelist_item(ip_whitelist_id:$ip_whitelist_id,note:$note)
                        
                }
                `,args || {},headers,'update_ip_whitelist_item')
                }

async delete_ip_whitelist_item({args,  headers}:{args: DeleteIpWhitelistItemArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($ip_whitelist_id: String!) {
                    delete_ip_whitelist_item(ip_whitelist_id:$ip_whitelist_id)
                        
                }
                `,args || {},headers,'delete_ip_whitelist_item')
                }

async update_hedging_account({args,  headers}:{args: UpdateHedgingAccountArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($usd_threshold: Float,$is_active: ToggleSwitch,$hedging_adapter_id: String!,$currency_id: String!) {
                    update_hedging_account(usd_threshold:$usd_threshold,is_active:$is_active,hedging_adapter_id:$hedging_adapter_id,currency_id:$currency_id)
                        
                }
                `,args || {},headers,'update_hedging_account')
                }

async send_margin_trade_notif({args,  headers}:{args: SendMarginTradeNotifArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String!,$trigger: NotificationTrigger!,$payload: String!) {
                    send_margin_trade_notif(user_id:$user_id,trigger:$trigger,payload:$payload)
                        
                }
                `,args || {},headers,'send_margin_trade_notif')
                }

async create_margin_account_transaction({args, fields,  headers}:{args: CreateMarginAccountTransactionArgs, fields:((keyof AccountTransaction) | Partial<Record<keyof AccountTransaction,any[]>>)[], headers?:HeadersInit}):Promise<AccountTransaction>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($item: RecordTransactionItem!) {
                    create_margin_account_transaction(item:$item)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_margin_account_transaction')
                }

async update_admin_properties({args, fields,  headers}:{args: UpdateAdminPropertiesArgs, fields:((keyof AdminProperty) | Partial<Record<keyof AdminProperty,any[]>>)[], headers?:HeadersInit}):Promise<AdminProperty[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($properties: [UpdateAdminPropertyInput!]!) {
                    update_admin_properties(properties:$properties)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'update_admin_properties')
                }

async create_upload({args, fields,  headers}:{args: CreateUploadArgs, fields:((keyof NewUploadResult) | Partial<Record<keyof NewUploadResult,any[]>>)[], headers?:HeadersInit}):Promise<NewUploadResult>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($document_type: UploadDocumentType!,$content_type: String!,$user_id: String) {
                    create_upload(document_type:$document_type,content_type:$content_type,user_id:$user_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_upload')
                }

async complete_upload({args, fields,  headers}:{args: CompleteUploadArgs, fields:((keyof Upload) | Partial<Record<keyof Upload,any[]>>)[], headers?:HeadersInit}):Promise<Upload>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($upload_id: String!,$size: Float!,$original_name: String!,$s3_etag: String!) {
                    complete_upload(upload_id:$upload_id,size:$size,original_name:$original_name,s3_etag:$s3_etag)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'complete_upload')
                }

async update_elliptic_risk_threshold({args,  headers}:{args: UpdateEllipticRiskThresholdArgs,  headers?:HeadersInit}):Promise<number>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($threshold: Int!) {
                    update_elliptic_risk_threshold(threshold:$threshold)
                        
                }
                `,args || {},headers,'update_elliptic_risk_threshold')
                }

async update_scorechain_minimal_risk_score({args,  headers}:{args: UpdateScorechainMinimalRiskScoreArgs,  headers?:HeadersInit}):Promise<number>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($risk_score: Int!) {
                    update_scorechain_minimal_risk_score(risk_score:$risk_score)
                        
                }
                `,args || {},headers,'update_scorechain_minimal_risk_score')
                }

async update_payment_kyt_status({args,  headers}:{args: UpdatePaymentKytStatusArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($payment_id: String!,$kyt_status: PaymentKytStatus!,$kyt_approval_reason: String) {
                    update_payment_kyt_status(payment_id:$payment_id,kyt_status:$kyt_status,kyt_approval_reason:$kyt_approval_reason)
                        
                }
                `,args || {},headers,'update_payment_kyt_status')
                }

async reprocess_kyt_payment({args,  headers}:{args: ReprocessKytPaymentArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($payment_id: String!) {
                    reprocess_kyt_payment(payment_id:$payment_id)
                        
                }
                `,args || {},headers,'reprocess_kyt_payment')
                }

async create_instrument_strategy_rule({args, fields,  headers}:{args: CreateInstrumentStrategyRuleArgs, fields:((keyof InstrumentStrategyRule) | Partial<Record<keyof InstrumentStrategyRule,any[]>>)[], headers?:HeadersInit}):Promise<InstrumentStrategyRule>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($instrument_strategy_id: String!,$is_active: ToggleSwitch!,$min_total_volume: Float!,$min_ask_volume: Float!,$min_bid_volume: Float!,$max_spread: Float!,$max_update_interval: Int,$max_violations_before_measures: Int,$disable_strategy_if_violated: ToggleSwitch,$disable_hedging_if_violated: ToggleSwitch) {
                    create_instrument_strategy_rule(instrument_strategy_id:$instrument_strategy_id,is_active:$is_active,min_total_volume:$min_total_volume,min_ask_volume:$min_ask_volume,min_bid_volume:$min_bid_volume,max_spread:$max_spread,max_update_interval:$max_update_interval,max_violations_before_measures:$max_violations_before_measures,disable_strategy_if_violated:$disable_strategy_if_violated,disable_hedging_if_violated:$disable_hedging_if_violated)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_instrument_strategy_rule')
                }

async update_instrument_strategy_rule({args, fields,  headers}:{args: UpdateInstrumentStrategyRuleArgs, fields:((keyof InstrumentStrategyRule) | Partial<Record<keyof InstrumentStrategyRule,any[]>>)[], headers?:HeadersInit}):Promise<InstrumentStrategyRule>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($is_active: ToggleSwitch,$min_total_volume: Float,$min_ask_volume: Float,$min_bid_volume: Float,$max_spread: Float,$max_update_interval: Int,$max_violations_before_measures: Int,$disable_strategy_if_violated: ToggleSwitch,$disable_hedging_if_violated: ToggleSwitch,$instrument_strategy_id: String!) {
                    update_instrument_strategy_rule(is_active:$is_active,min_total_volume:$min_total_volume,min_ask_volume:$min_ask_volume,min_bid_volume:$min_bid_volume,max_spread:$max_spread,max_update_interval:$max_update_interval,max_violations_before_measures:$max_violations_before_measures,disable_strategy_if_violated:$disable_strategy_if_violated,disable_hedging_if_violated:$disable_hedging_if_violated,instrument_strategy_id:$instrument_strategy_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'update_instrument_strategy_rule')
                }

async delete_instrument_strategy_rule({args,  headers}:{args: DeleteInstrumentStrategyRuleArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($instrument_strategy_id: String!) {
                    delete_instrument_strategy_rule(instrument_strategy_id:$instrument_strategy_id)
                        
                }
                `,args || {},headers,'delete_instrument_strategy_rule')
                }

async create_vault({args, fields,  headers}:{args: CreateVaultArgs, fields:((keyof Vault) | Partial<Record<keyof Vault,any[]>>)[], headers?:HeadersInit}):Promise<Vault>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($currency_id: String!,$name: String,$annual_rate_percent: Float!,$max_withdrawal_amount: Float!,$max_deposit_amount: Float!,$min_withdrawal_amount: Float!,$min_deposit_amount: Float!,$cut_off_time_seconds: Int!,$lock_in_period_seconds: Int,$effective_date_from: String!,$effective_date_to: String,$rate_type: VaultRateType!,$is_active: ToggleSwitch!,$withdrawal_enabled: ToggleSwitch!,$deposit_enabled: ToggleSwitch!,$withdrawal_policy: VaultWithdrawalPolicy,$withdrawal_delay_seconds: Int,$meta: String) {
                    create_vault(currency_id:$currency_id,name:$name,annual_rate_percent:$annual_rate_percent,max_withdrawal_amount:$max_withdrawal_amount,max_deposit_amount:$max_deposit_amount,min_withdrawal_amount:$min_withdrawal_amount,min_deposit_amount:$min_deposit_amount,cut_off_time_seconds:$cut_off_time_seconds,lock_in_period_seconds:$lock_in_period_seconds,effective_date_from:$effective_date_from,effective_date_to:$effective_date_to,rate_type:$rate_type,is_active:$is_active,withdrawal_enabled:$withdrawal_enabled,deposit_enabled:$deposit_enabled,withdrawal_policy:$withdrawal_policy,withdrawal_delay_seconds:$withdrawal_delay_seconds,meta:$meta)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_vault')
                }

async update_vault({args, fields,  headers}:{args: UpdateVaultArgs, fields:((keyof Vault) | Partial<Record<keyof Vault,any[]>>)[], headers?:HeadersInit}):Promise<Vault>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($currency_id: String,$name: String,$annual_rate_percent: Float,$max_withdrawal_amount: Float,$max_deposit_amount: Float,$min_withdrawal_amount: Float,$min_deposit_amount: Float,$cut_off_time_seconds: Int,$lock_in_period_seconds: Int,$effective_date_from: String,$effective_date_to: String,$rate_type: VaultRateType,$is_active: ToggleSwitch,$withdrawal_enabled: ToggleSwitch,$deposit_enabled: ToggleSwitch,$withdrawal_policy: VaultWithdrawalPolicy,$withdrawal_delay_seconds: Int,$meta: String,$vault_id: String!) {
                    update_vault(currency_id:$currency_id,name:$name,annual_rate_percent:$annual_rate_percent,max_withdrawal_amount:$max_withdrawal_amount,max_deposit_amount:$max_deposit_amount,min_withdrawal_amount:$min_withdrawal_amount,min_deposit_amount:$min_deposit_amount,cut_off_time_seconds:$cut_off_time_seconds,lock_in_period_seconds:$lock_in_period_seconds,effective_date_from:$effective_date_from,effective_date_to:$effective_date_to,rate_type:$rate_type,is_active:$is_active,withdrawal_enabled:$withdrawal_enabled,deposit_enabled:$deposit_enabled,withdrawal_policy:$withdrawal_policy,withdrawal_delay_seconds:$withdrawal_delay_seconds,meta:$meta,vault_id:$vault_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'update_vault')
                }

async trigger_vaults_interests_calculation({  headers}:{  headers?:HeadersInit}={}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation {
                    trigger_vaults_interests_calculation
                        
                }
                `,{},headers,'trigger_vaults_interests_calculation')
                }

async trigger_vaults_locks_withdrawals({  headers}:{  headers?:HeadersInit}={}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation {
                    trigger_vaults_locks_withdrawals
                        
                }
                `,{},headers,'trigger_vaults_locks_withdrawals')
                }

async trigger_expired_vaults_processing({  headers}:{  headers?:HeadersInit}={}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation {
                    trigger_expired_vaults_processing
                        
                }
                `,{},headers,'trigger_expired_vaults_processing')
                }

async trigger_delayed_vaults_trx_processing({  headers}:{  headers?:HeadersInit}={}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation {
                    trigger_delayed_vaults_trx_processing
                        
                }
                `,{},headers,'trigger_delayed_vaults_trx_processing')
                }

async create_vault_withdrawal({args, fields,  headers}:{args: CreateVaultWithdrawalArgs, fields:((keyof VaultTransaction) | Partial<Record<keyof VaultTransaction,any[]>>)[], headers?:HeadersInit}):Promise<VaultTransaction>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($vault_id: String!,$amount: Float!,$user_id: String,$use_all_funds: Boolean) {
                    create_vault_withdrawal(vault_id:$vault_id,amount:$amount,user_id:$user_id,use_all_funds:$use_all_funds)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_vault_withdrawal')
                }

async create_vault_deposit({args, fields,  headers}:{args: CreateVaultDepositArgs, fields:((keyof VaultTransaction) | Partial<Record<keyof VaultTransaction,any[]>>)[], headers?:HeadersInit}):Promise<VaultTransaction>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($vault_id: String!,$amount: Float!,$user_id: String,$use_all_funds: Boolean) {
                    create_vault_deposit(vault_id:$vault_id,amount:$amount,user_id:$user_id,use_all_funds:$use_all_funds)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_vault_deposit')
                }

async create_vault_transaction({args, fields,  headers}:{args: CreateVaultTransactionArgs, fields:((keyof VaultTransaction) | Partial<Record<keyof VaultTransaction,any[]>>)[], headers?:HeadersInit}):Promise<VaultTransaction>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($vault_id: String!,$amount: Float!,$transaction_type: AccountTransactionType!,$user_id: String,$use_all_funds: Boolean) {
                    create_vault_transaction(vault_id:$vault_id,amount:$amount,transaction_type:$transaction_type,user_id:$user_id,use_all_funds:$use_all_funds)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_vault_transaction')
                }

async create_vault_manual_transactions({args, fields,  headers}:{args: CreateVaultManualTransactionsArgs, fields:((keyof VaultTransaction) | Partial<Record<keyof VaultTransaction,any[]>>)[], headers?:HeadersInit}):Promise<VaultTransaction[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($items: [CreateVaultTransactionInput!]!) {
                    create_vault_manual_transactions(items:$items)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_vault_manual_transactions')
                }

async update_vault_transaction_request({args,  headers}:{args: UpdateVaultTransactionRequestArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($request_id: String!,$status: VaultTransactionRequestStatus!,$approval_reason: String) {
                    update_vault_transaction_request(request_id:$request_id,status:$status,approval_reason:$approval_reason)
                        
                }
                `,args || {},headers,'update_vault_transaction_request')
                }

async cancel_vault_transaction_request({args,  headers}:{args: CancelVaultTransactionRequestArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($request_id: String!,$user_id: String) {
                    cancel_vault_transaction_request(request_id:$request_id,user_id:$user_id)
                        
                }
                `,args || {},headers,'cancel_vault_transaction_request')
                }

async create_referral({args, fields,  headers}:{args?: CreateReferralArgs, fields:((keyof Referral) | Partial<Record<keyof Referral,any[]>>)[], headers?:HeadersInit}):Promise<Referral>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String) {
                    create_referral(user_id:$user_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_referral')
                }

async claim_referral({args,  headers}:{args: ClaimReferralArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($referral_id: String!,$user_id: String) {
                    claim_referral(referral_id:$referral_id,user_id:$user_id)
                        
                }
                `,args || {},headers,'claim_referral')
                }

async calculate_payments_limits({args, fields,  headers}:{args: CalculatePaymentsLimitsArgs, fields:((keyof LimitsStatus) | Partial<Record<keyof LimitsStatus,any[]>>)[], headers?:HeadersInit}):Promise<LimitsStatus>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($notion_currency: String!,$currency_id: String!,$type: PaymentType!) {
                    calculate_payments_limits(notion_currency:$notion_currency,currency_id:$currency_id,type:$type)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'calculate_payments_limits')
                }

async create_aggregated_payment_limit({args, fields,  headers}:{args: CreateAggregatedPaymentLimitArgs, fields:((keyof AggregatedPaymentLimit) | Partial<Record<keyof AggregatedPaymentLimit,any[]>>)[], headers?:HeadersInit}):Promise<AggregatedPaymentLimit>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($limit_group_id: String!,$currency_id: String!,$withdrawal_daily_limit: Float,$withdrawal_weekly_limit: Float,$withdrawal_monthly_limit: Float,$is_active: ToggleSwitch!) {
                    create_aggregated_payment_limit(limit_group_id:$limit_group_id,currency_id:$currency_id,withdrawal_daily_limit:$withdrawal_daily_limit,withdrawal_weekly_limit:$withdrawal_weekly_limit,withdrawal_monthly_limit:$withdrawal_monthly_limit,is_active:$is_active)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_aggregated_payment_limit')
                }

async update_aggregated_payment_limit({args,  headers}:{args: UpdateAggregatedPaymentLimitArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($limit_group_id: String,$currency_id: String,$withdrawal_daily_limit: Float,$withdrawal_weekly_limit: Float,$withdrawal_monthly_limit: Float,$is_active: ToggleSwitch,$serial_ids: [number!]!) {
                    update_aggregated_payment_limit(limit_group_id:$limit_group_id,currency_id:$currency_id,withdrawal_daily_limit:$withdrawal_daily_limit,withdrawal_weekly_limit:$withdrawal_weekly_limit,withdrawal_monthly_limit:$withdrawal_monthly_limit,is_active:$is_active,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'update_aggregated_payment_limit')
                }

async delete_aggregated_payment_limit({args,  headers}:{args: DeleteAggregatedPaymentLimitArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($serial_id: Float,$serial_ids: [number!]!) {
                    delete_aggregated_payment_limit(serial_id:$serial_id,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'delete_aggregated_payment_limit')
                }

async sync_config({args,  headers}:{args: SyncConfigArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($api_url: String!,$mode: SyncConfigMode,$api_key: String!,$api_secret: String!,$currencies: Boolean,$hedging_adapters: Boolean,$instruments: Boolean,$instruments_strategies: Boolean,$payments_routes: Boolean,$limits_groups: Boolean,$trading_limits: Boolean,$payments_limits: Boolean,$fees_groups: Boolean,$trading_fees: Boolean,$payments_fees: Boolean) {
                    sync_config(api_url:$api_url,mode:$mode,api_key:$api_key,api_secret:$api_secret,currencies:$currencies,hedging_adapters:$hedging_adapters,instruments:$instruments,instruments_strategies:$instruments_strategies,payments_routes:$payments_routes,limits_groups:$limits_groups,trading_limits:$trading_limits,payments_limits:$payments_limits,fees_groups:$fees_groups,trading_fees:$trading_fees,payments_fees:$payments_fees)
                        
                }
                `,args || {},headers,'sync_config')
                }

async create_ip_blacklist_item({args, fields,  headers}:{args: CreateIpBlacklistItemArgs, fields:((keyof IpBlacklistItem) | Partial<Record<keyof IpBlacklistItem,any[]>>)[], headers?:HeadersInit}):Promise<IpBlacklistItem>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($ip_address: String!,$reason: String) {
                    create_ip_blacklist_item(ip_address:$ip_address,reason:$reason)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_ip_blacklist_item')
                }

async create_ip_blacklist_items({args, fields,  headers}:{args: CreateIpBlacklistItemsArgs, fields:((keyof IpBlacklistItem) | Partial<Record<keyof IpBlacklistItem,any[]>>)[], headers?:HeadersInit}):Promise<IpBlacklistItem[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($ip_addresses: [string!]!,$reason: String) {
                    create_ip_blacklist_items(ip_addresses:$ip_addresses,reason:$reason)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_ip_blacklist_items')
                }

async update_ip_blacklist_item({args,  headers}:{args: UpdateIpBlacklistItemArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($ip_address: String!,$reason: String) {
                    update_ip_blacklist_item(ip_address:$ip_address,reason:$reason)
                        
                }
                `,args || {},headers,'update_ip_blacklist_item')
                }

async remove_ip_blacklist_item({args,  headers}:{args: RemoveIpBlacklistItemArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($ip_address: String!) {
                    remove_ip_blacklist_item(ip_address:$ip_address)
                        
                }
                `,args || {},headers,'remove_ip_blacklist_item')
                }

async reset_demo_balances({args,  headers}:{args?: ResetDemoBalancesArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String) {
                    reset_demo_balances(user_id:$user_id)
                        
                }
                `,args || {},headers,'reset_demo_balances')
                }

async activate_license({  headers}:{  headers?:HeadersInit}={}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation {
                    activate_license
                        
                }
                `,{},headers,'activate_license')
                }

async renew_license({  headers}:{  headers?:HeadersInit}={}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation {
                    renew_license
                        
                }
                `,{},headers,'renew_license')
                }

async create_referral_reward({args,  headers}:{args: CreateReferralRewardArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($is_active: ToggleSwitch!,$type: ReferralRewardType!,$meta: String!,$min_deposited_volume_required: Float!,$min_deposited_volume: Float,$min_deposited_volume_currency_id: String,$kyc_required: ToggleSwitch!,$is_delayed: ToggleSwitch,$delayed_period_seconds: Int,$min_staked_vault_required: ToggleSwitch,$min_staked_vault_volume: Float,$min_staked_vault_currency_id: String) {
                    create_referral_reward(is_active:$is_active,type:$type,meta:$meta,min_deposited_volume_required:$min_deposited_volume_required,min_deposited_volume:$min_deposited_volume,min_deposited_volume_currency_id:$min_deposited_volume_currency_id,kyc_required:$kyc_required,is_delayed:$is_delayed,delayed_period_seconds:$delayed_period_seconds,min_staked_vault_required:$min_staked_vault_required,min_staked_vault_volume:$min_staked_vault_volume,min_staked_vault_currency_id:$min_staked_vault_currency_id)
                        
                }
                `,args || {},headers,'create_referral_reward')
                }

async update_referral_reward({args,  headers}:{args: UpdateReferralRewardArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($is_active: ToggleSwitch,$meta: String,$min_deposited_volume_required: Float,$min_deposited_volume: Float,$min_deposited_volume_currency_id: String,$kyc_required: ToggleSwitch,$delayed_period_seconds: Int,$min_staked_vault_volume: Float,$min_staked_vault_currency_id: String,$type: ReferralRewardType!,$is_delayed: ToggleSwitch,$min_staked_vault_required: ToggleSwitch) {
                    update_referral_reward(is_active:$is_active,meta:$meta,min_deposited_volume_required:$min_deposited_volume_required,min_deposited_volume:$min_deposited_volume,min_deposited_volume_currency_id:$min_deposited_volume_currency_id,kyc_required:$kyc_required,delayed_period_seconds:$delayed_period_seconds,min_staked_vault_volume:$min_staked_vault_volume,min_staked_vault_currency_id:$min_staked_vault_currency_id,type:$type,is_delayed:$is_delayed,min_staked_vault_required:$min_staked_vault_required)
                        
                }
                `,args || {},headers,'update_referral_reward')
                }

async delete_referral_reward({args,  headers}:{args: DeleteReferralRewardArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($type: ReferralRewardType!) {
                    delete_referral_reward(type:$type)
                        
                }
                `,args || {},headers,'delete_referral_reward')
                }

async start_trading_grid({args, fields,  headers}:{args: StartTradingGridArgs, fields:((keyof TradingGrid) | Partial<Record<keyof TradingGrid,any[]>>)[], headers?:HeadersInit}):Promise<TradingGrid>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String,$instrument_id: String!,$initial_investment_quote_currency: Float!,$mode: TradginGridMode!,$size: Int!,$price_range_from: Float!,$price_range_to: Float!,$stop_loss_percentage: Float,$take_profit_percentage: Float,$wallet_id: String) {
                    start_trading_grid(user_id:$user_id,instrument_id:$instrument_id,initial_investment_quote_currency:$initial_investment_quote_currency,mode:$mode,size:$size,price_range_from:$price_range_from,price_range_to:$price_range_to,stop_loss_percentage:$stop_loss_percentage,take_profit_percentage:$take_profit_percentage,wallet_id:$wallet_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'start_trading_grid')
                }

async stop_trading_grid({args, fields,  headers}:{args: StopTradingGridArgs, fields:((keyof TradingGrid) | Partial<Record<keyof TradingGrid,any[]>>)[], headers?:HeadersInit}):Promise<TradingGrid>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($trading_grid_id: String!) {
                    stop_trading_grid(trading_grid_id:$trading_grid_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'stop_trading_grid')
                }

async update_trading_grid({args, fields,  headers}:{args: UpdateTradingGridArgs, fields:((keyof TradingGrid) | Partial<Record<keyof TradingGrid,any[]>>)[], headers?:HeadersInit}):Promise<TradingGrid>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($trading_grid_id: String!,$stop_loss_percentage: Float,$take_profit_percentage: Float) {
                    update_trading_grid(trading_grid_id:$trading_grid_id,stop_loss_percentage:$stop_loss_percentage,take_profit_percentage:$take_profit_percentage)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'update_trading_grid')
                }

async estimate_trading_grid({args, fields,  headers}:{args: EstimateTradingGridArgs, fields:((keyof EstimateTradingGridResult) | Partial<Record<keyof EstimateTradingGridResult,any[]>>)[], headers?:HeadersInit}):Promise<EstimateTradingGridResult>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String,$instrument_id: String!,$initial_investment_quote_currency: Float!,$mode: TradginGridMode!,$size: Int!,$price_range_from: Float!,$price_range_to: Float!,$stop_loss_percentage: Float,$take_profit_percentage: Float,$wallet_id: String,$time_from: Float!,$time_to: Float!) {
                    estimate_trading_grid(user_id:$user_id,instrument_id:$instrument_id,initial_investment_quote_currency:$initial_investment_quote_currency,mode:$mode,size:$size,price_range_from:$price_range_from,price_range_to:$price_range_to,stop_loss_percentage:$stop_loss_percentage,take_profit_percentage:$take_profit_percentage,wallet_id:$wallet_id,time_from:$time_from,time_to:$time_to)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'estimate_trading_grid')
                }

async user_switch_fee_group({args,  headers}:{args: UserSwitchFeeGroupArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($fee_group_name: FxcmFeeGroups!) {
                    user_switch_fee_group(fee_group_name:$fee_group_name)
                        
                }
                `,args || {},headers,'user_switch_fee_group')
                }

async update_withdrawal_notional_fee({args,  headers}:{args: UpdateWithdrawalNotionalFeeArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($notional: Float!) {
                    update_withdrawal_notional_fee(notional:$notional)
                        
                }
                `,args || {},headers,'update_withdrawal_notional_fee')
                }

async create_trade_tier({args, fields,  headers}:{args: CreateTradeTierArgs, fields:((keyof TradeTier) | Partial<Record<keyof TradeTier,any[]>>)[], headers?:HeadersInit}):Promise<TradeTier>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($fee_group_id: String!,$name: String!,$maker_progressive: Float!,$taker_progressive: Float!,$threshold: Float!) {
                    create_trade_tier(fee_group_id:$fee_group_id,name:$name,maker_progressive:$maker_progressive,taker_progressive:$taker_progressive,threshold:$threshold)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_trade_tier')
                }

async update_trade_tier({args,  headers}:{args: UpdateTradeTierArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($tier_id: String,$name: String,$maker_progressive: Float,$taker_progressive: Float,$threshold: Float,$serial_ids: [number!]!) {
                    update_trade_tier(tier_id:$tier_id,name:$name,maker_progressive:$maker_progressive,taker_progressive:$taker_progressive,threshold:$threshold,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'update_trade_tier')
                }

async delete_trade_tier({args,  headers}:{args: DeleteTradeTierArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($tier_id: String!,$serial_ids: [number!]!) {
                    delete_trade_tier(tier_id:$tier_id,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'delete_trade_tier')
                }

async delete_trades_volume({args,  headers}:{args: DeleteTradesVolumeArgs,  headers?:HeadersInit}):Promise<boolean>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($user_id: String!,$serial_ids: [number!]!) {
                    delete_trades_volume(user_id:$user_id,serial_ids:$serial_ids)
                        
                }
                `,args || {},headers,'delete_trades_volume')
                }

async create_wallet({args, fields,  headers}:{args: CreateWalletArgs, fields:((keyof Wallet) | Partial<Record<keyof Wallet,any[]>>)[], headers?:HeadersInit}):Promise<Wallet>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                mutation($name: String!,$user_id: String,$description: String) {
                    create_wallet(name:$name,user_id:$user_id,description:$description)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'create_wallet')
                }



        async version({  headers}:{  headers?:HeadersInit}={}):Promise<string>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    version
                        
                }
                `,{},headers,'version')
                }

async open_orders({args, fields,  headers}:{args: OpenOrdersArgs, fields:((keyof Order) | Partial<Record<keyof Order,any[]>>)[], headers?:HeadersInit}):Promise<Order[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($order_id: String,$client_order_id: String,$time_in_force: OrderTimeInForce,$type: OrderType,$side: OrderSide,$instrument_id: String,$message: String,$parent_order_id: String,$user_id: String,$search: String,$status: [OrderStatus!]!,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput,$serialIdRange: SerialIdRangeInput,$wallet_id: String) {
                    open_orders(order_id:$order_id,client_order_id:$client_order_id,time_in_force:$time_in_force,type:$type,side:$side,instrument_id:$instrument_id,message:$message,parent_order_id:$parent_order_id,user_id:$user_id,search:$search,status:$status,pager:$pager,sort:$sort,dateRange:$dateRange,serialIdRange:$serialIdRange,wallet_id:$wallet_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'open_orders')
                }

async closed_orders({args, fields,  headers}:{args: ClosedOrdersArgs, fields:((keyof Order) | Partial<Record<keyof Order,any[]>>)[], headers?:HeadersInit}):Promise<Order[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($order_id: String,$client_order_id: String,$time_in_force: OrderTimeInForce,$type: OrderType,$side: OrderSide,$instrument_id: String,$message: String,$parent_order_id: String,$user_id: String,$search: String,$status: [OrderStatus!]!,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput,$serialIdRange: SerialIdRangeInput,$wallet_id: String) {
                    closed_orders(order_id:$order_id,client_order_id:$client_order_id,time_in_force:$time_in_force,type:$type,side:$side,instrument_id:$instrument_id,message:$message,parent_order_id:$parent_order_id,user_id:$user_id,search:$search,status:$status,pager:$pager,sort:$sort,dateRange:$dateRange,serialIdRange:$serialIdRange,wallet_id:$wallet_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'closed_orders')
                }

async estimate_order({args, fields,  headers}:{args: EstimateOrderArgs, fields:((keyof EstimateOrderResult) | Partial<Record<keyof EstimateOrderResult,any[]>>)[], headers?:HeadersInit}):Promise<EstimateOrderResult>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String,$source_currency_id: String!,$source_currency_amount: Float,$target_currency_id: String!,$target_currency_amount: Float,$price: Float,$instrument_id: String) {
                    estimate_order(user_id:$user_id,source_currency_id:$source_currency_id,source_currency_amount:$source_currency_amount,target_currency_id:$target_currency_id,target_currency_amount:$target_currency_amount,price:$price,instrument_id:$instrument_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'estimate_order')
                }

async trades({args, fields,  headers}:{args?: TradesArgs, fields:((keyof Trade) | Partial<Record<keyof Trade,any[]>>)[], headers?:HeadersInit}):Promise<Trade[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($trade_id: String,$instrument_id: String,$order_id: String,$side: OrderSide,$counter_order_id: String,$user_id: String,$search: String,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput,$serialIdRange: SerialIdRangeInput) {
                    trades(trade_id:$trade_id,instrument_id:$instrument_id,order_id:$order_id,side:$side,counter_order_id:$counter_order_id,user_id:$user_id,search:$search,pager:$pager,sort:$sort,dateRange:$dateRange,serialIdRange:$serialIdRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'trades')
                }

async sso_settings({ fields,  headers}:{ fields:((keyof SsoSettingsResult) | Partial<Record<keyof SsoSettingsResult,any[]>>)[], headers?:HeadersInit}):Promise<SsoSettingsResult>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    sso_settings
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'sso_settings')
                }

async healthcheck({ fields,  headers}:{ fields:((keyof HealthcheckResult) | Partial<Record<keyof HealthcheckResult,any[]>>)[], headers?:HeadersInit}):Promise<HealthcheckResult>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    healthcheck
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'healthcheck')
                }

async admins({args, fields,  headers}:{args?: AdminsArgs, fields:((keyof Admin) | Partial<Record<keyof Admin,any[]>>)[], headers?:HeadersInit}):Promise<Admin[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($serialIdRange: SerialIdRangeInput) {
                    admins(serialIdRange:$serialIdRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'admins')
                }

async instruments({args, fields,  headers}:{args?: InstrumentsArgs, fields:((keyof Instrument) | Partial<Record<keyof Instrument,any[]>>)[], headers?:HeadersInit}):Promise<Instrument[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($instrument_id: String,$is_active: ToggleSwitch,$search: String,$page: Int,$limit: Int,$sort: SortInput,$store_mode: ToggleSwitch) {
                    instruments(instrument_id:$instrument_id,is_active:$is_active,search:$search,page:$page,limit:$limit,sort:$sort,store_mode:$store_mode)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'instruments')
                }

async instrument_price_bars({args, fields,  headers}:{args: InstrumentPriceBarsArgs, fields:((keyof InstrumentPriceHistory) | Partial<Record<keyof InstrumentPriceHistory,any[]>>)[], headers?:HeadersInit}):Promise<InstrumentPriceHistory[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($periodicity: InstrumentHistoryPeriodicity,$limit: Int,$date_range: DateRangeInput,$instrument_id: String!) {
                    instrument_price_bars(periodicity:$periodicity,limit:$limit,date_range:$date_range,instrument_id:$instrument_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'instrument_price_bars')
                }

async currencies({args, fields,  headers}:{args?: CurrenciesArgs, fields:((keyof Currency) | Partial<Record<keyof Currency,any[]>>)[], headers?:HeadersInit}):Promise<Currency[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($search: String,$type: CurrencyType,$is_active: ToggleSwitch,$page: Int,$limit: Int,$store_mode: ToggleSwitch) {
                    currencies(search:$search,type:$type,is_active:$is_active,page:$page,limit:$limit,store_mode:$store_mode)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'currencies')
                }

async payments({args, fields,  headers}:{args: PaymentsArgs, fields:((keyof Payment) | Partial<Record<keyof Payment,any[]>>)[], headers?:HeadersInit}):Promise<Payment[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($payment_id: String,$remote_txid: String,$kyt_status: [PaymentStatus!],$currency_id: String,$type: PaymentType,$psp_service_id: String,$reference: String,$created_by: String,$payment_id_in: [string!]!,$payment_id_not_in: [string!]!,$user_id: String,$user_id_in: [string!]!,$user_id_not_in: [string!]!,$search: String,$status: [PaymentStatus!]!,$approval_status: [PaymentApprovalStatus!]!,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput,$serialIdRange: SerialIdRangeInput,$kyt_status_in: [PaymentKytStatus!]!,$currency_type: CurrencyType,$quote_currency_id: String,$internal_transfer_cross_reference: String,$crypto_pay_payments: Boolean) {
                    payments(payment_id:$payment_id,remote_txid:$remote_txid,kyt_status:$kyt_status,currency_id:$currency_id,type:$type,psp_service_id:$psp_service_id,reference:$reference,created_by:$created_by,payment_id_in:$payment_id_in,payment_id_not_in:$payment_id_not_in,user_id:$user_id,user_id_in:$user_id_in,user_id_not_in:$user_id_not_in,search:$search,status:$status,approval_status:$approval_status,pager:$pager,sort:$sort,dateRange:$dateRange,serialIdRange:$serialIdRange,kyt_status_in:$kyt_status_in,currency_type:$currency_type,quote_currency_id:$quote_currency_id,internal_transfer_cross_reference:$internal_transfer_cross_reference,crypto_pay_payments:$crypto_pay_payments)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'payments')
                }

async deposit_address_crypto({args, fields,  headers}:{args: DepositAddressCryptoArgs, fields:((keyof DepositAddressCrypto) | Partial<Record<keyof DepositAddressCrypto,any[]>>)[], headers?:HeadersInit}):Promise<DepositAddressCrypto>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String,$currency_id: String!,$network: String,$reference: String,$psp_service_id: String,$address_type: String,$payment_route_id: String) {
                    deposit_address_crypto(user_id:$user_id,currency_id:$currency_id,network:$network,reference:$reference,psp_service_id:$psp_service_id,address_type:$address_type,payment_route_id:$payment_route_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'deposit_address_crypto')
                }

async deposit_addresses_crypto({args, fields,  headers}:{args?: DepositAddressesCryptoArgs, fields:((keyof DepositAddressCrypto) | Partial<Record<keyof DepositAddressCrypto,any[]>>)[], headers?:HeadersInit}):Promise<DepositAddressCrypto[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($deposit_address_crypto_id: String,$currency_id: String,$address: String,$address_tag_type: CryptoAddressTagType,$address_tag_value: String,$network: String,$psp_service_id: String,$reference: String,$user_id: String,$search: String,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput) {
                    deposit_addresses_crypto(deposit_address_crypto_id:$deposit_address_crypto_id,currency_id:$currency_id,address:$address,address_tag_type:$address_tag_type,address_tag_value:$address_tag_value,network:$network,psp_service_id:$psp_service_id,reference:$reference,user_id:$user_id,search:$search,pager:$pager,sort:$sort,dateRange:$dateRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'deposit_addresses_crypto')
                }

async conversions({args, fields,  headers}:{args: ConversionsArgs, fields:((keyof Conversion) | Partial<Record<keyof Conversion,any[]>>)[], headers?:HeadersInit}):Promise<Conversion[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String,$search: String,$reference: String,$status_in: [ConversionStatus!]!,$conversion_quote_id: String,$source_currency_id: String,$target_currency_id: String,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput,$serialIdRange: SerialIdRangeInput,$wallet_id: String) {
                    conversions(user_id:$user_id,search:$search,reference:$reference,status_in:$status_in,conversion_quote_id:$conversion_quote_id,source_currency_id:$source_currency_id,target_currency_id:$target_currency_id,pager:$pager,sort:$sort,dateRange:$dateRange,serialIdRange:$serialIdRange,wallet_id:$wallet_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'conversions')
                }

async conversion_quotes({args, fields,  headers}:{args?: ConversionQuotesArgs, fields:((keyof ConversionQuote) | Partial<Record<keyof ConversionQuote,any[]>>)[], headers?:HeadersInit}):Promise<ConversionQuote[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String,$search: String,$conversion_quote_id: String,$reference: String,$source_currency_id: String,$target_currency_id: String,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput) {
                    conversion_quotes(user_id:$user_id,search:$search,conversion_quote_id:$conversion_quote_id,reference:$reference,source_currency_id:$source_currency_id,target_currency_id:$target_currency_id,pager:$pager,sort:$sort,dateRange:$dateRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'conversion_quotes')
                }

async conversion_quotes_risks({args, fields,  headers}:{args?: ConversionQuotesRisksArgs, fields:((keyof ConversionQuotesRisks) | Partial<Record<keyof ConversionQuotesRisks,any[]>>)[], headers?:HeadersInit}):Promise<ConversionQuotesRisks[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($source_currency_id: String,$target_currency_id: String,$instrument_id: String,$user_id: String,$pager: PagerInput,$sort: SortInput) {
                    conversion_quotes_risks(source_currency_id:$source_currency_id,target_currency_id:$target_currency_id,instrument_id:$instrument_id,user_id:$user_id,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'conversion_quotes_risks')
                }

async users({args, fields,  headers}:{args?: UsersArgs, fields:((keyof User) | Partial<Record<keyof User,any[]>>)[], headers?:HeadersInit}):Promise<User[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($parent_user_id: String,$username: String,$email: String,$is_active: ToggleSwitch,$is_deleted: ToggleSwitch,$fee_group_id: String,$limit_group_id: String,$user_id: String,$search: String,$kyc_property: String,$kyc_value: String,$kyc_status: UserStatus,$kyc_level: String,$status: UserStatus,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput,$serialIdRange: SerialIdRangeInput,$mfa_status: ToggleSwitch) {
                    users(parent_user_id:$parent_user_id,username:$username,email:$email,is_active:$is_active,is_deleted:$is_deleted,fee_group_id:$fee_group_id,limit_group_id:$limit_group_id,user_id:$user_id,search:$search,kyc_property:$kyc_property,kyc_value:$kyc_value,kyc_status:$kyc_status,kyc_level:$kyc_level,status:$status,pager:$pager,sort:$sort,dateRange:$dateRange,serialIdRange:$serialIdRange,mfa_status:$mfa_status)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'users')
                }

async total_users({  headers}:{  headers?:HeadersInit}={}):Promise<number>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    total_users
                        
                }
                `,{},headers,'total_users')
                }

async user({args, fields,  headers}:{args?: UserArgs, fields:((keyof User) | Partial<Record<keyof User,any[]>>)[], headers?:HeadersInit}):Promise<User>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String) {
                    user(user_id:$user_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'user')
                }

async account_transactions({args, fields,  headers}:{args?: AccountTransactionsArgs, fields:((keyof AccountTransaction) | Partial<Record<keyof AccountTransaction,any[]>>)[], headers?:HeadersInit}):Promise<AccountTransaction[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($account_transaction_id: String,$parent_transaction_id: String,$client_transaction_id: String,$account_id: String,$payment_id: String,$currency_id: String,$transaction_class: AccountTransactionClass,$type: AccountTransactionType,$order_id: String,$trade_id: String,$conversion_id: String,$margin_trade_id: String,$comment: String,$created_by: String,$user_id: String,$search: String,$instrument_id: String,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput,$serialIdRange: SerialIdRangeInput) {
                    account_transactions(account_transaction_id:$account_transaction_id,parent_transaction_id:$parent_transaction_id,client_transaction_id:$client_transaction_id,account_id:$account_id,payment_id:$payment_id,currency_id:$currency_id,transaction_class:$transaction_class,type:$type,order_id:$order_id,trade_id:$trade_id,conversion_id:$conversion_id,margin_trade_id:$margin_trade_id,comment:$comment,created_by:$created_by,user_id:$user_id,search:$search,instrument_id:$instrument_id,pager:$pager,sort:$sort,dateRange:$dateRange,serialIdRange:$serialIdRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'account_transactions')
                }

async accounts_balances({args, fields,  headers}:{args?: AccountsBalancesArgs, fields:((keyof AccountBalance) | Partial<Record<keyof AccountBalance,any[]>>)[], headers?:HeadersInit}):Promise<AccountBalance[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String,$currency_id: String,$hide_zero_balances: ToggleSwitch,$wallet_id: String) {
                    accounts_balances(user_id:$user_id,currency_id:$currency_id,hide_zero_balances:$hide_zero_balances,wallet_id:$wallet_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'accounts_balances')
                }

async accounts({args, fields,  headers}:{args?: AccountsArgs, fields:((keyof AccountsResult) | Partial<Record<keyof AccountsResult,any[]>>)[], headers?:HeadersInit}):Promise<AccountsResult[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($account_id: String,$currency_id: String,$wallet_id: String,$user_id: String,$search: String,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput,$serialIdRange: SerialIdRangeInput,$hide_zero_balances: ToggleSwitch) {
                    accounts(account_id:$account_id,currency_id:$currency_id,wallet_id:$wallet_id,user_id:$user_id,search:$search,pager:$pager,sort:$sort,dateRange:$dateRange,serialIdRange:$serialIdRange,hide_zero_balances:$hide_zero_balances)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'accounts')
                }

async limits_groups({args, fields,  headers}:{args?: LimitsGroupsArgs, fields:((keyof LimitGroup) | Partial<Record<keyof LimitGroup,any[]>>)[], headers?:HeadersInit}):Promise<LimitGroup[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($limit_group_id: String,$name: String,$description: String,$pager: PagerInput,$sort: SortInput) {
                    limits_groups(limit_group_id:$limit_group_id,name:$name,description:$description,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'limits_groups')
                }

async fees_groups({args, fields,  headers}:{args?: FeesGroupsArgs, fields:((keyof FeeGroup) | Partial<Record<keyof FeeGroup,any[]>>)[], headers?:HeadersInit}):Promise<FeeGroup[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($fee_group_id: String,$name: String,$description: String,$beneficiary_user_id: String,$pager: PagerInput,$sort: SortInput) {
                    fees_groups(fee_group_id:$fee_group_id,name:$name,description:$description,beneficiary_user_id:$beneficiary_user_id,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'fees_groups')
                }

async payments_fees({args, fields,  headers}:{args?: PaymentsFeesArgs, fields:((keyof PaymentFee) | Partial<Record<keyof PaymentFee,any[]>>)[], headers?:HeadersInit}):Promise<PaymentFee[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($payment_route_id: String,$currency_id: String,$fee_group_id: String,$pager: PagerInput,$sort: SortInput,$calculation_type: FeeCalculationType) {
                    payments_fees(payment_route_id:$payment_route_id,currency_id:$currency_id,fee_group_id:$fee_group_id,pager:$pager,sort:$sort,calculation_type:$calculation_type)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'payments_fees')
                }

async trading_fees({args, fields,  headers}:{args?: TradingFeesArgs, fields:((keyof TradingFee) | Partial<Record<keyof TradingFee,any[]>>)[], headers?:HeadersInit}):Promise<TradingFee[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($instrument_id: String,$fee_group_id: String,$pager: PagerInput,$sort: SortInput) {
                    trading_fees(instrument_id:$instrument_id,fee_group_id:$fee_group_id,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'trading_fees')
                }

async payments_routes({args, fields,  headers}:{args?: PaymentsRoutesArgs, fields:((keyof PaymentRoute) | Partial<Record<keyof PaymentRoute,any[]>>)[], headers?:HeadersInit}):Promise<PaymentRoute[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($payment_route_id: String,$currency_id: String,$psp_service_id: String,$crypto_network: String,$verification_type: VerificationType,$currency_type: CurrencyType,$pager: PagerInput,$sort: SortInput) {
                    payments_routes(payment_route_id:$payment_route_id,currency_id:$currency_id,psp_service_id:$psp_service_id,crypto_network:$crypto_network,verification_type:$verification_type,currency_type:$currency_type,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'payments_routes')
                }

async crypto_networks({ fields,  headers}:{ fields:((keyof CryptoNetwork) | Partial<Record<keyof CryptoNetwork,any[]>>)[], headers?:HeadersInit}):Promise<CryptoNetwork[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    crypto_networks
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'crypto_networks')
                }

async psp_services({  headers}:{  headers?:HeadersInit}={}):Promise<string[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    psp_services
                        
                }
                `,{},headers,'psp_services')
                }

async payments_limits({args, fields,  headers}:{args?: PaymentsLimitsArgs, fields:((keyof PaymentLimit) | Partial<Record<keyof PaymentLimit,any[]>>)[], headers?:HeadersInit}):Promise<PaymentLimit[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($limit_group_id: String,$currency_id: String,$pager: PagerInput,$sort: SortInput) {
                    payments_limits(limit_group_id:$limit_group_id,currency_id:$currency_id,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'payments_limits')
                }

async api_keys({args, fields,  headers}:{args?: ApiKeysArgs, fields:((keyof ApiKey) | Partial<Record<keyof ApiKey,any[]>>)[], headers?:HeadersInit}):Promise<ApiKey[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String,$pager: PagerInput,$sort: SortInput,$search: String) {
                    api_keys(user_id:$user_id,pager:$pager,sort:$sort,search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'api_keys')
                }

async cognito_pools({args, fields,  headers}:{args?: CognitoPoolsArgs, fields:((keyof CognitoPool) | Partial<Record<keyof CognitoPool,any[]>>)[], headers?:HeadersInit}):Promise<CognitoPool[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($search: String,$pager: PagerInput,$sort: SortInput) {
                    cognito_pools(search:$search,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'cognito_pools')
                }

async instruments_strategies({args, fields,  headers}:{args?: InstrumentsStrategiesArgs, fields:((keyof InstrumentStrategy) | Partial<Record<keyof InstrumentStrategy,any[]>>)[], headers?:HeadersInit}):Promise<InstrumentStrategy[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($hedging_adapter_id: String,$instrument_id: String,$search: String,$pager: PagerInput,$sort: SortInput,$is_active: ToggleSwitch,$hedging_enabled: ToggleSwitch) {
                    instruments_strategies(hedging_adapter_id:$hedging_adapter_id,instrument_id:$instrument_id,search:$search,pager:$pager,sort:$sort,is_active:$is_active,hedging_enabled:$hedging_enabled)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'instruments_strategies')
                }

async hedging_orders({args, fields,  headers}:{args?: HedgingOrdersArgs, fields:((keyof HedgingOrder) | Partial<Record<keyof HedgingOrder,any[]>>)[], headers?:HeadersInit}):Promise<HedgingOrder[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($hedging_adapter_id: String,$side: OrderSide,$status: HedgingOrderStatus,$error_message: String,$pager: PagerInput,$search: String,$sort: SortInput,$dateRange: DateRangeInput) {
                    hedging_orders(hedging_adapter_id:$hedging_adapter_id,side:$side,status:$status,error_message:$error_message,pager:$pager,search:$search,sort:$sort,dateRange:$dateRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'hedging_orders')
                }

async system_settings({args, fields,  headers}:{args?: SystemSettingsArgs, fields:((keyof Setting) | Partial<Record<keyof Setting,any[]>>)[], headers?:HeadersInit}):Promise<Setting[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($search: String,$pager: PagerInput,$sort: SortInput) {
                    system_settings(search:$search,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'system_settings')
                }

async notification_settings({ fields,  headers}:{ fields:((keyof NotificationOptions) | Partial<Record<keyof NotificationOptions,any[]>>)[], headers?:HeadersInit}):Promise<NotificationOptions>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    notification_settings
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'notification_settings')
                }

async default_notifications({ fields,  headers}:{ fields:((keyof Setting) | Partial<Record<keyof Setting,any[]>>)[], headers?:HeadersInit}):Promise<Setting[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    default_notifications
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'default_notifications')
                }

async delayed_mutations({  headers}:{  headers?:HeadersInit}={}):Promise<string[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    delayed_mutations
                        
                }
                `,{},headers,'delayed_mutations')
                }

async geo_restrictions({ fields,  headers}:{ fields:((keyof GeoRestrictionWithCurrentGeo) | Partial<Record<keyof GeoRestrictionWithCurrentGeo,any[]>>)[], headers?:HeadersInit}):Promise<GeoRestrictionWithCurrentGeo>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    geo_restrictions
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'geo_restrictions')
                }

async trader_mfa_provider({  headers}:{  headers?:HeadersInit}={}):Promise<string>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    trader_mfa_provider
                        
                }
                `,{},headers,'trader_mfa_provider')
                }

async admin_mfa_provider({  headers}:{  headers?:HeadersInit}={}):Promise<string>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    admin_mfa_provider
                        
                }
                `,{},headers,'admin_mfa_provider')
                }

async is_margin_trading_enabled({  headers}:{  headers?:HeadersInit}={}):Promise<string>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    is_margin_trading_enabled
                        
                }
                `,{},headers,'is_margin_trading_enabled')
                }

async products_enabled({args, fields,  headers}:{args: ProductsEnabledArgs, fields:((keyof ProductsEnabled) | Partial<Record<keyof ProductsEnabled,any[]>>)[], headers?:HeadersInit}):Promise<ProductsEnabled>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($role: ClientRole!) {
                    products_enabled(role:$role)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'products_enabled')
                }

async user_products_enabled({args, fields,  headers}:{args: UserProductsEnabledArgs, fields:((keyof ProductsEnabled) | Partial<Record<keyof ProductsEnabled,any[]>>)[], headers?:HeadersInit}):Promise<ProductsEnabled>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($role: ClientRole!) {
                    user_products_enabled(role:$role)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'user_products_enabled')
                }

async accounts_portfolio_report({args, fields,  headers}:{args: AccountsPortfolioReportArgs, fields:((keyof AccountsPortfolioReportItem) | Partial<Record<keyof AccountsPortfolioReportItem,any[]>>)[], headers?:HeadersInit}):Promise<AccountsPortfolioReportItem[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($currencies: [string!]!) {
                    accounts_portfolio_report(currencies:$currencies)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'accounts_portfolio_report')
                }

async orders_summary_report({args, fields,  headers}:{args?: OrdersSummaryReportArgs, fields:((keyof OrdersSummaryReportItem) | Partial<Record<keyof OrdersSummaryReportItem,any[]>>)[], headers?:HeadersInit}):Promise<OrdersSummaryReportItem[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String,$dateRange: DateRangeInput) {
                    orders_summary_report(user_id:$user_id,dateRange:$dateRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'orders_summary_report')
                }

async conversions_summary_report({args, fields,  headers}:{args?: ConversionsSummaryReportArgs, fields:((keyof ConversionsSummaryReportItem) | Partial<Record<keyof ConversionsSummaryReportItem,any[]>>)[], headers?:HeadersInit}):Promise<ConversionsSummaryReportItem[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String,$dateRange: DateRangeInput) {
                    conversions_summary_report(user_id:$user_id,dateRange:$dateRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'conversions_summary_report')
                }

async liquidity_report({ fields,  headers}:{ fields:((keyof LiquidityReportResult) | Partial<Record<keyof LiquidityReportResult,any[]>>)[], headers?:HeadersInit}):Promise<LiquidityReportResult>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    liquidity_report
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'liquidity_report')
                }

async daily_balances_report({args, fields,  headers}:{args?: DailyBalancesReportArgs, fields:((keyof DailyBalancesReportItem) | Partial<Record<keyof DailyBalancesReportItem,any[]>>)[], headers?:HeadersInit}):Promise<DailyBalancesReportItem[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String,$dateRange: DateRangeInput) {
                    daily_balances_report(user_id:$user_id,dateRange:$dateRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'daily_balances_report')
                }

async open_exposure_report({args, fields,  headers}:{args?: OpenExposureReportArgs, fields:((keyof OpenExposureReportResult) | Partial<Record<keyof OpenExposureReportResult,any[]>>)[], headers?:HeadersInit}):Promise<OpenExposureReportResult[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($base_currency_id: String,$quote_currency_id: String,$pager: PagerInput) {
                    open_exposure_report(base_currency_id:$base_currency_id,quote_currency_id:$quote_currency_id,pager:$pager)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'open_exposure_report')
                }

async permissions({args, fields,  headers}:{args?: PermissionsArgs, fields:((keyof Permission) | Partial<Record<keyof Permission,any[]>>)[], headers?:HeadersInit}):Promise<Permission[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($searchFor: EPermissionsSearchFor,$role: Role) {
                    permissions(searchFor:$searchFor,role:$role)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'permissions')
                }

async permissions_subjects({  headers}:{  headers?:HeadersInit}={}):Promise<string[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    permissions_subjects
                        
                }
                `,{},headers,'permissions_subjects')
                }

async all_permission_subjects({  headers}:{  headers?:HeadersInit}={}):Promise<string[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    all_permission_subjects
                        
                }
                `,{},headers,'all_permission_subjects')
                }

async permissions_share({args, fields,  headers}:{args?: PermissionsShareArgs, fields:((keyof PermissionShare) | Partial<Record<keyof PermissionShare,any[]>>)[], headers?:HeadersInit}):Promise<PermissionShare[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($search: String,$user_id: String,$subject: String,$pager: PagerInput,$sort: SortInput,$group_by: FindPermissionsShareGroupBy) {
                    permissions_share(search:$search,user_id:$user_id,subject:$subject,pager:$pager,sort:$sort,group_by:$group_by)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'permissions_share')
                }

async kyc_preferences({ fields,  headers}:{ fields:((keyof KycPreferences) | Partial<Record<keyof KycPreferences,any[]>>)[], headers?:HeadersInit}):Promise<KycPreferences>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    kyc_preferences
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'kyc_preferences')
                }

async vasps_list({ fields,  headers}:{ fields:((keyof Vasp) | Partial<Record<keyof Vasp,any[]>>)[], headers?:HeadersInit}):Promise<Vasp[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    vasps_list
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'vasps_list')
                }

async webhooks({args, fields,  headers}:{args?: WebhooksArgs, fields:((keyof Webhook) | Partial<Record<keyof Webhook,any[]>>)[], headers?:HeadersInit}):Promise<Webhook[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($is_active: ToggleSwitch,$user_id: String,$search: String,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput) {
                    webhooks(is_active:$is_active,user_id:$user_id,search:$search,pager:$pager,sort:$sort,dateRange:$dateRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'webhooks')
                }

async hedging_adapter_ids({  headers}:{  headers?:HeadersInit}={}):Promise<string[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    hedging_adapter_ids
                        
                }
                `,{},headers,'hedging_adapter_ids')
                }

async hedging_adapters({ fields,  headers}:{ fields:((keyof HedgingAdapter) | Partial<Record<keyof HedgingAdapter,any[]>>)[], headers?:HeadersInit}):Promise<HedgingAdapter[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    hedging_adapters
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'hedging_adapters')
                }

async timeline({args, fields,  headers}:{args: TimelineArgs, fields:((keyof TimelineEvent) | Partial<Record<keyof TimelineEvent,any[]>>)[], headers?:HeadersInit}):Promise<TimelineEvent[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String,$event_data: String,$created_at: String,$search: String,$event_name: [NotificationTrigger!]!,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput) {
                    timeline(user_id:$user_id,event_data:$event_data,created_at:$created_at,search:$search,event_name:$event_name,pager:$pager,sort:$sort,dateRange:$dateRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'timeline')
                }

async trading_limits({args, fields,  headers}:{args?: TradingLimitsArgs, fields:((keyof TradingLimit) | Partial<Record<keyof TradingLimit,any[]>>)[], headers?:HeadersInit}):Promise<TradingLimit[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($limit_group_id: String,$instrument_id: String,$pager: PagerInput,$sort: SortInput) {
                    trading_limits(limit_group_id:$limit_group_id,instrument_id:$instrument_id,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'trading_limits')
                }

async trading_volumes({args, fields,  headers}:{args?: TradingVolumesArgs, fields:((keyof UsersTradingVolume) | Partial<Record<keyof UsersTradingVolume,any[]>>)[], headers?:HeadersInit}):Promise<UsersTradingVolume[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String,$instrument_id: String,$pager: PagerInput,$sort: SortInput,$volume: TradingVolumeType) {
                    trading_volumes(user_id:$user_id,instrument_id:$instrument_id,pager:$pager,sort:$sort,volume:$volume)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'trading_volumes')
                }

async countries({args, fields,  headers}:{args?: CountriesArgs, fields:((keyof Country) | Partial<Record<keyof Country,any[]>>)[], headers?:HeadersInit}):Promise<Country[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($search: String) {
                    countries(search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'countries')
                }

async provinces({args, fields,  headers}:{args: ProvincesArgs, fields:((keyof Province) | Partial<Record<keyof Province,any[]>>)[], headers?:HeadersInit}):Promise<Province[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($country_code: String!,$search: String) {
                    provinces(country_code:$country_code,search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'provinces')
                }

async delayed_requests({args, fields,  headers}:{args?: DelayedRequestsArgs, fields:((keyof DelayedRequest) | Partial<Record<keyof DelayedRequest,any[]>>)[], headers?:HeadersInit}):Promise<DelayedRequest[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($delayed_request_id: String,$request_name: String,$approval_status: DelayedRequestStatus,$admin_id: String,$admin_email: String,$approved_by: String,$pager: PagerInput,$sort: SortInput,$search: String) {
                    delayed_requests(delayed_request_id:$delayed_request_id,request_name:$request_name,approval_status:$approval_status,admin_id:$admin_id,admin_email:$admin_email,approved_by:$approved_by,pager:$pager,sort:$sort,search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'delayed_requests')
                }

async kyc_user_data({args, fields,  headers}:{args: KycUserDataArgs, fields:((keyof KycUserData) | Partial<Record<keyof KycUserData,any[]>>)[], headers?:HeadersInit}):Promise<KycUserData[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String,$search: String,$kyc_properties: [string!]!) {
                    kyc_user_data(user_id:$user_id,search:$search,kyc_properties:$kyc_properties)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'kyc_user_data')
                }

async permission_presets({ fields,  headers}:{ fields:((keyof PermissionPreset) | Partial<Record<keyof PermissionPreset,any[]>>)[], headers?:HeadersInit}):Promise<PermissionPreset[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    permission_presets
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'permission_presets')
                }

async instruments_strategies_schedule({args, fields,  headers}:{args?: InstrumentsStrategiesScheduleArgs, fields:((keyof InstrumentsStrategiesSchedule) | Partial<Record<keyof InstrumentsStrategiesSchedule,any[]>>)[], headers?:HeadersInit}):Promise<InstrumentsStrategiesSchedule[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($instruments_strategies_schedule_id: String,$serial_id: Float,$instrument_strategy_id: String,$is_active: ToggleSwitch,$time_from_day_of_week: DayOfWeek,$time_from_hours: Int,$time_from_minutes: Int,$time_to_day_of_week: DayOfWeek,$time_to_hours: Int,$time_to_minutes: Int,$is_working: ToggleSwitch) {
                    instruments_strategies_schedule(instruments_strategies_schedule_id:$instruments_strategies_schedule_id,serial_id:$serial_id,instrument_strategy_id:$instrument_strategy_id,is_active:$is_active,time_from_day_of_week:$time_from_day_of_week,time_from_hours:$time_from_hours,time_from_minutes:$time_from_minutes,time_to_day_of_week:$time_to_day_of_week,time_to_hours:$time_to_hours,time_to_minutes:$time_to_minutes,is_working:$is_working)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'instruments_strategies_schedule')
                }

async currencies_prices({args, fields,  headers}:{args?: CurrenciesPricesArgs, fields:((keyof CurrencyPrice) | Partial<Record<keyof CurrencyPrice,any[]>>)[], headers?:HeadersInit}):Promise<CurrencyPrice[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($base_currency_id: String,$quote_currency_id: String,$source: String,$search: String,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput) {
                    currencies_prices(base_currency_id:$base_currency_id,quote_currency_id:$quote_currency_id,source:$source,search:$search,pager:$pager,sort:$sort,dateRange:$dateRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'currencies_prices')
                }

async currency_prices({args, fields,  headers}:{args: CurrencyPricesArgs, fields:((keyof CurrencyPrice) | Partial<Record<keyof CurrencyPrice,any[]>>)[], headers?:HeadersInit}):Promise<CurrencyPrice[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($base_currencies: [string!]!,$quote_currency: String!) {
                    currency_prices(base_currencies:$base_currencies,quote_currency:$quote_currency)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'currency_prices')
                }

async convert_currency_amount({args,  headers}:{args: ConvertCurrencyAmountArgs,  headers?:HeadersInit}):Promise<number>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($base_currency_id: String!,$quote_currency_id: String!,$amount: Float!) {
                    convert_currency_amount(base_currency_id:$base_currency_id,quote_currency_id:$quote_currency_id,amount:$amount)
                        
                }
                `,args || {},headers,'convert_currency_amount')
                }

async ip_whitelist({args, fields,  headers}:{args?: IpWhitelistArgs, fields:((keyof IpWhitelistItem) | Partial<Record<keyof IpWhitelistItem,any[]>>)[], headers?:HeadersInit}):Promise<IpWhitelistItem[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($ip_address: String,$email: String,$ip_whitelist_id: String,$search: String,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput) {
                    ip_whitelist(ip_address:$ip_address,email:$email,ip_whitelist_id:$ip_whitelist_id,search:$search,pager:$pager,sort:$sort,dateRange:$dateRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'ip_whitelist')
                }

async hedging_accounts({args, fields,  headers}:{args?: HedgingAccountsArgs, fields:((keyof HedgingAccount) | Partial<Record<keyof HedgingAccount,any[]>>)[], headers?:HeadersInit}):Promise<HedgingAccount[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($hedging_adapter_id: String,$currency_id: String,$is_active: ToggleSwitch,$pager: PagerInput,$sort: SortInput) {
                    hedging_accounts(hedging_adapter_id:$hedging_adapter_id,currency_id:$currency_id,is_active:$is_active,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'hedging_accounts')
                }

async margin_account_transactions({args, fields,  headers}:{args?: MarginAccountTransactionsArgs, fields:((keyof AccountTransaction) | Partial<Record<keyof AccountTransaction,any[]>>)[], headers?:HeadersInit}):Promise<AccountTransaction[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($account_transaction_id: String,$parent_transaction_id: String,$client_transaction_id: String,$account_id: String,$payment_id: String,$currency_id: String,$transaction_class: AccountTransactionClass,$type: AccountTransactionType,$order_id: String,$trade_id: String,$conversion_id: String,$margin_trade_id: String,$comment: String,$created_by: String,$user_id: String,$search: String,$instrument_id: String,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput,$serialIdRange: SerialIdRangeInput) {
                    margin_account_transactions(account_transaction_id:$account_transaction_id,parent_transaction_id:$parent_transaction_id,client_transaction_id:$client_transaction_id,account_id:$account_id,payment_id:$payment_id,currency_id:$currency_id,transaction_class:$transaction_class,type:$type,order_id:$order_id,trade_id:$trade_id,conversion_id:$conversion_id,margin_trade_id:$margin_trade_id,comment:$comment,created_by:$created_by,user_id:$user_id,search:$search,instrument_id:$instrument_id,pager:$pager,sort:$sort,dateRange:$dateRange,serialIdRange:$serialIdRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'margin_account_transactions')
                }

async margin_users_free_balances({args, fields,  headers}:{args: MarginUsersFreeBalancesArgs, fields:((keyof MarginUserFreeBalanceItem) | Partial<Record<keyof MarginUserFreeBalanceItem,any[]>>)[], headers?:HeadersInit}):Promise<MarginUserFreeBalanceItem[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($users_ids: [string!]!) {
                    margin_users_free_balances(users_ids:$users_ids)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'margin_users_free_balances')
                }

async admin_properties({args, fields,  headers}:{args?: AdminPropertiesArgs, fields:((keyof AdminProperty) | Partial<Record<keyof AdminProperty,any[]>>)[], headers?:HeadersInit}):Promise<AdminProperty[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($name: String,$search: String) {
                    admin_properties(name:$name,search:$search)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'admin_properties')
                }

async admin_mfa_status({  headers}:{  headers?:HeadersInit}={}):Promise<ToggleSwitch>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    admin_mfa_status
                        
                }
                `,{},headers,'admin_mfa_status')
                }

async elliptic_screenings({ fields,  headers}:{ fields:((keyof KytScreening) | Partial<Record<keyof KytScreening,any[]>>)[], headers?:HeadersInit}):Promise<KytScreening[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    elliptic_screenings
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'elliptic_screenings')
                }

async elliptic_risk_threshold({  headers}:{  headers?:HeadersInit}={}):Promise<number>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    elliptic_risk_threshold
                        
                }
                `,{},headers,'elliptic_risk_threshold')
                }

async scorechain_screenings({args, fields,  headers}:{args: ScorechainScreeningsArgs, fields:((keyof KytScreening) | Partial<Record<keyof KytScreening,any[]>>)[], headers?:HeadersInit}):Promise<KytScreening[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($screening_id: String,$payment_id: String,$analysis_target: KytAnalysisTarget,$provider: KytProvider!,$pager: PagerInput,$sort: SortInput) {
                    scorechain_screenings(screening_id:$screening_id,payment_id:$payment_id,analysis_target:$analysis_target,provider:$provider,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'scorechain_screenings')
                }

async scorechain_minimal_risk_score({  headers}:{  headers?:HeadersInit}={}):Promise<number>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    scorechain_minimal_risk_score
                        
                }
                `,{},headers,'scorechain_minimal_risk_score')
                }

async instruments_strategies_rules({args, fields,  headers}:{args?: InstrumentsStrategiesRulesArgs, fields:((keyof InstrumentStrategyRule) | Partial<Record<keyof InstrumentStrategyRule,any[]>>)[], headers?:HeadersInit}):Promise<InstrumentStrategyRule[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($instrument_strategy_id: String,$instrument_id: String,$hedging_adapter_id: String,$search: String,$sort: SortInput,$pager: PagerInput) {
                    instruments_strategies_rules(instrument_strategy_id:$instrument_strategy_id,instrument_id:$instrument_id,hedging_adapter_id:$hedging_adapter_id,search:$search,sort:$sort,pager:$pager)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'instruments_strategies_rules')
                }

async instruments_strategies_alerts({args, fields,  headers}:{args?: InstrumentsStrategiesAlertsArgs, fields:((keyof InstrumentsStrategiesAlert) | Partial<Record<keyof InstrumentsStrategiesAlert,any[]>>)[], headers?:HeadersInit}):Promise<InstrumentsStrategiesAlert[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($instrument_strategy_id: String,$alert_trigger: InstrumentStrategyAlertTrigger,$instrument_id: String,$hedging_adapter_id: String,$search: String,$pager: PagerInput,$sort: SortInput) {
                    instruments_strategies_alerts(instrument_strategy_id:$instrument_strategy_id,alert_trigger:$alert_trigger,instrument_id:$instrument_id,hedging_adapter_id:$hedging_adapter_id,search:$search,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'instruments_strategies_alerts')
                }

async vaults({args, fields,  headers}:{args?: VaultsArgs, fields:((keyof Vault) | Partial<Record<keyof Vault,any[]>>)[], headers?:HeadersInit}):Promise<Vault[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($vault_id: String,$currency_id: String,$is_active: ToggleSwitch,$withdrawal_enabled: ToggleSwitch,$deposit_enabled: ToggleSwitch,$withdrawal_policy: VaultWithdrawalPolicy,$search: String,$pager: PagerInput,$sort: SortInput) {
                    vaults(vault_id:$vault_id,currency_id:$currency_id,is_active:$is_active,withdrawal_enabled:$withdrawal_enabled,deposit_enabled:$deposit_enabled,withdrawal_policy:$withdrawal_policy,search:$search,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'vaults')
                }

async vaults_average_user_apy({args,  headers}:{args?: VaultsAverageUserApyArgs,  headers?:HeadersInit}):Promise<number>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String) {
                    vaults_average_user_apy(user_id:$user_id)
                        
                }
                `,args || {},headers,'vaults_average_user_apy')
                }

async estimate_vault_interests({args,  headers}:{args: EstimateVaultInterestsArgs,  headers?:HeadersInit}):Promise<number>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($vault_id: String!,$amount: Float!,$duration_seconds: Int) {
                    estimate_vault_interests(vault_id:$vault_id,amount:$amount,duration_seconds:$duration_seconds)
                        
                }
                `,args || {},headers,'estimate_vault_interests')
                }

async vaults_accounts({args, fields,  headers}:{args?: VaultsAccountsArgs, fields:((keyof VaultAccount) | Partial<Record<keyof VaultAccount,any[]>>)[], headers?:HeadersInit}):Promise<VaultAccount[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($vault_account_id: String,$vault_id: String,$user_id: String,$currency_id: String,$hide_zero_balances: ToggleSwitch,$search: String,$pager: PagerInput,$sort: SortInput) {
                    vaults_accounts(vault_account_id:$vault_account_id,vault_id:$vault_id,user_id:$user_id,currency_id:$currency_id,hide_zero_balances:$hide_zero_balances,search:$search,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'vaults_accounts')
                }

async vaults_total_user_balance_quoted({args,  headers}:{args: VaultsTotalUserBalanceQuotedArgs,  headers?:HeadersInit}):Promise<number>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($quote_currency_id: String!,$user_id: String) {
                    vaults_total_user_balance_quoted(quote_currency_id:$quote_currency_id,user_id:$user_id)
                        
                }
                `,args || {},headers,'vaults_total_user_balance_quoted')
                }

async vaults_transactions({args, fields,  headers}:{args?: VaultsTransactionsArgs, fields:((keyof VaultTransaction) | Partial<Record<keyof VaultTransaction,any[]>>)[], headers?:HeadersInit}):Promise<VaultTransaction[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($vault_id: String,$user_id: String,$vault_transaction_id: String,$account_transaction_id: String,$transaction_type: AccountTransactionType,$transaction_class: VaultsTransactionClass,$search: String,$currency_id: String,$pager: PagerInput,$date_range: DateRangeInput,$sort: SortInput) {
                    vaults_transactions(vault_id:$vault_id,user_id:$user_id,vault_transaction_id:$vault_transaction_id,account_transaction_id:$account_transaction_id,transaction_type:$transaction_type,transaction_class:$transaction_class,search:$search,currency_id:$currency_id,pager:$pager,date_range:$date_range,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'vaults_transactions')
                }

async portfolio_history({args,  headers}:{args: PortfolioHistoryArgs,  headers?:HeadersInit}):Promise<number[][]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($currency_id: String!,$user_id: String,$timestamp: String!,$interval: PortfolioHistoryInterval!) {
                    portfolio_history(currency_id:$currency_id,user_id:$user_id,timestamp:$timestamp,interval:$interval)
                        
                }
                `,args || {},headers,'portfolio_history')
                }

async profits_dashboard({args,  headers}:{args: ProfitsDashboardArgs,  headers?:HeadersInit}):Promise<number[][]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($currency_id: String!,$interval: DashboardReportInterval!) {
                    profits_dashboard(currency_id:$currency_id,interval:$interval)
                        
                }
                `,args || {},headers,'profits_dashboard')
                }

async conversions_dashboard({args,  headers}:{args: ConversionsDashboardArgs,  headers?:HeadersInit}):Promise<number[][]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($currency_id: String!,$interval: DashboardReportInterval!) {
                    conversions_dashboard(currency_id:$currency_id,interval:$interval)
                        
                }
                `,args || {},headers,'conversions_dashboard')
                }

async volume_dashboard({args,  headers}:{args: VolumeDashboardArgs,  headers?:HeadersInit}):Promise<number[][]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($currency_id: String!,$interval: DashboardReportInterval!) {
                    volume_dashboard(currency_id:$currency_id,interval:$interval)
                        
                }
                `,args || {},headers,'volume_dashboard')
                }

async deposits_dashboard({args,  headers}:{args: DepositsDashboardArgs,  headers?:HeadersInit}):Promise<number[][]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($currency_id: String!,$interval: DashboardReportInterval!) {
                    deposits_dashboard(currency_id:$currency_id,interval:$interval)
                        
                }
                `,args || {},headers,'deposits_dashboard')
                }

async withdrawals_dashboard({args,  headers}:{args: WithdrawalsDashboardArgs,  headers?:HeadersInit}):Promise<number[][]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($currency_id: String!,$interval: DashboardReportInterval!) {
                    withdrawals_dashboard(currency_id:$currency_id,interval:$interval)
                        
                }
                `,args || {},headers,'withdrawals_dashboard')
                }

async summary_dashboard({args, fields,  headers}:{args: SummaryDashboardArgs, fields:((keyof Summary) | Partial<Record<keyof Summary,any[]>>)[], headers?:HeadersInit}):Promise<Summary>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($currency_id: String!,$interval: DashboardReportInterval!) {
                    summary_dashboard(currency_id:$currency_id,interval:$interval)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'summary_dashboard')
                }

async unified_transactions({args, fields,  headers}:{args: UnifiedTransactionsArgs, fields:((keyof UnifiedTransaction) | Partial<Record<keyof UnifiedTransaction,any[]>>)[], headers?:HeadersInit}):Promise<UnifiedTransaction[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($start_date: String!,$end_date: String!,$side: OrderSide,$currencies: [string!]!,$exchanges: [string!]!,$search: String,$pager: PagerInput) {
                    unified_transactions(start_date:$start_date,end_date:$end_date,side:$side,currencies:$currencies,exchanges:$exchanges,search:$search,pager:$pager)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'unified_transactions')
                }

async unified_transactions_lps({  headers}:{  headers?:HeadersInit}={}):Promise<string[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    unified_transactions_lps
                        
                }
                `,{},headers,'unified_transactions_lps')
                }

async vaults_transactions_requests({args, fields,  headers}:{args?: VaultsTransactionsRequestsArgs, fields:((keyof VaultTransactionRequest) | Partial<Record<keyof VaultTransactionRequest,any[]>>)[], headers?:HeadersInit}):Promise<VaultTransactionRequest[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($serial_id: Int,$request_id: String,$user_id: String,$vault_id: String,$transaction_type: AccountTransactionType,$transaction_class: VaultsTransactionClass,$status: VaultTransactionRequestStatus,$approved_by: String,$search: String,$pager: PagerInput,$date_range: DateRangeInput,$sort: SortInput,$currency_id: String) {
                    vaults_transactions_requests(serial_id:$serial_id,request_id:$request_id,user_id:$user_id,vault_id:$vault_id,transaction_type:$transaction_type,transaction_class:$transaction_class,status:$status,approved_by:$approved_by,search:$search,pager:$pager,date_range:$date_range,sort:$sort,currency_id:$currency_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'vaults_transactions_requests')
                }

async referrals({args, fields,  headers}:{args?: ReferralsArgs, fields:((keyof Referral) | Partial<Record<keyof Referral,any[]>>)[], headers?:HeadersInit}):Promise<Referral[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($referral_id: String,$user_id: String,$search: String,$pager: PagerInput,$sort: SortInput) {
                    referrals(referral_id:$referral_id,user_id:$user_id,search:$search,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'referrals')
                }

async aggregated_payments_limits({args, fields,  headers}:{args?: AggregatedPaymentsLimitsArgs, fields:((keyof AggregatedPaymentLimit) | Partial<Record<keyof AggregatedPaymentLimit,any[]>>)[], headers?:HeadersInit}):Promise<AggregatedPaymentLimit[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($limit_group_id: String,$currency_id: String,$pager: PagerInput,$sort: SortInput) {
                    aggregated_payments_limits(limit_group_id:$limit_group_id,currency_id:$currency_id,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'aggregated_payments_limits')
                }

async audit_trail_log({args, fields,  headers}:{args?: AuditTrailLogArgs, fields:((keyof AuditTrailLog) | Partial<Record<keyof AuditTrailLog,any[]>>)[], headers?:HeadersInit}):Promise<AuditTrailLog[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($entity: String,$action: String,$actor_id: String,$actor_ip: String,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput,$search: String,$search_expression: String) {
                    audit_trail_log(entity:$entity,action:$action,actor_id:$actor_id,actor_ip:$actor_ip,pager:$pager,sort:$sort,dateRange:$dateRange,search:$search,search_expression:$search_expression)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'audit_trail_log')
                }

async my_audit_trail_log({args, fields,  headers}:{args?: MyAuditTrailLogArgs, fields:((keyof AuditTrailLog) | Partial<Record<keyof AuditTrailLog,any[]>>)[], headers?:HeadersInit}):Promise<AuditTrailLog[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($entity: String,$action: String,$actor_id: String,$actor_ip: String,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput,$search: String,$search_expression: String) {
                    my_audit_trail_log(entity:$entity,action:$action,actor_id:$actor_id,actor_ip:$actor_ip,pager:$pager,sort:$sort,dateRange:$dateRange,search:$search,search_expression:$search_expression)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'my_audit_trail_log')
                }

async admin_events_log({args, fields,  headers}:{args?: AdminEventsLogArgs, fields:((keyof AdminEventsLog) | Partial<Record<keyof AdminEventsLog,any[]>>)[], headers?:HeadersInit}):Promise<AdminEventsLog[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($search: String,$action: String,$actor_id: String,$pager: PagerInput,$dateRange: DateRangeInput,$serialIdRange: SerialIdRangeInput) {
                    admin_events_log(search:$search,action:$action,actor_id:$actor_id,pager:$pager,dateRange:$dateRange,serialIdRange:$serialIdRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'admin_events_log')
                }

async referrals_history({args, fields,  headers}:{args?: ReferralsHistoryArgs, fields:((keyof ReferralHistory) | Partial<Record<keyof ReferralHistory,any[]>>)[], headers?:HeadersInit}):Promise<ReferralHistory[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($referral_id: String,$parent_user_id: String,$child_user_id: String,$search: String,$date_range: DateRangeInput,$pager: PagerInput,$sort: SortInput) {
                    referrals_history(referral_id:$referral_id,parent_user_id:$parent_user_id,child_user_id:$child_user_id,search:$search,date_range:$date_range,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'referrals_history')
                }

async referred_users_count({args,  headers}:{args?: ReferredUsersCountArgs,  headers?:HeadersInit}):Promise<number>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String) {
                    referred_users_count(user_id:$user_id)
                        
                }
                `,args || {},headers,'referred_users_count')
                }

async referrer_total_reward_quoted({args,  headers}:{args: ReferrerTotalRewardQuotedArgs,  headers?:HeadersInit}):Promise<number>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String,$quote_currency_id: String!) {
                    referrer_total_reward_quoted(user_id:$user_id,quote_currency_id:$quote_currency_id)
                        
                }
                `,args || {},headers,'referrer_total_reward_quoted')
                }

async blacklist_items({args, fields,  headers}:{args?: BlacklistItemsArgs, fields:((keyof IpBlacklistItem) | Partial<Record<keyof IpBlacklistItem,any[]>>)[], headers?:HeadersInit}):Promise<IpBlacklistItem[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($ip_address: String,$reason: String,$search: String,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput) {
                    blacklist_items(ip_address:$ip_address,reason:$reason,search:$search,pager:$pager,sort:$sort,dateRange:$dateRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'blacklist_items')
                }

async system_logs({args, fields,  headers}:{args?: SystemLogsArgs, fields:((keyof Log) | Partial<Record<keyof Log,any[]>>)[], headers?:HeadersInit}):Promise<Log[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($stem: String,$event: String,$rrn: String,$pager: PagerInput,$dateRange: DateRangeInput,$serialIdRange: SerialIdRangeInput) {
                    system_logs(stem:$stem,event:$event,rrn:$rrn,pager:$pager,dateRange:$dateRange,serialIdRange:$serialIdRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'system_logs')
                }

async whoami({ fields,  headers}:{ fields:((keyof WhoAmIResult) | Partial<Record<keyof WhoAmIResult,any[]>>)[], headers?:HeadersInit}):Promise<WhoAmIResult>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    whoami
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'whoami')
                }

async referrals_transactions_info({args, fields,  headers}:{args?: ReferralsTransactionsInfoArgs, fields:((keyof ReferralTransactionInfo) | Partial<Record<keyof ReferralTransactionInfo,any[]>>)[], headers?:HeadersInit}):Promise<ReferralTransactionInfo[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($account_transaction_id: String,$target_user_id: String,$referral_id: String,$reward_type: ReferralRewardType,$currency_id: String,$is_delayed: ToggleSwitch,$date_range: DateRangeInput,$search: String,$pager: PagerInput,$sort: SortInput) {
                    referrals_transactions_info(account_transaction_id:$account_transaction_id,target_user_id:$target_user_id,referral_id:$referral_id,reward_type:$reward_type,currency_id:$currency_id,is_delayed:$is_delayed,date_range:$date_range,search:$search,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'referrals_transactions_info')
                }

async license({ fields,  headers}:{ fields:((keyof LicenseStatus) | Partial<Record<keyof LicenseStatus,any[]>>)[], headers?:HeadersInit}):Promise<LicenseStatus>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    license
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'license')
                }

async referral_rewards({ fields,  headers}:{ fields:((keyof ReferralReward) | Partial<Record<keyof ReferralReward,any[]>>)[], headers?:HeadersInit}):Promise<ReferralReward[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    referral_rewards
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'referral_rewards')
                }

async required_actions({ fields,  headers}:{ fields:((keyof RequiredActions) | Partial<Record<keyof RequiredActions,any[]>>)[], headers?:HeadersInit}):Promise<RequiredActions>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    required_actions
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'required_actions')
                }

async trading_grids({args, fields,  headers}:{args?: TradingGridsArgs, fields:((keyof TradingGrid) | Partial<Record<keyof TradingGrid,any[]>>)[], headers?:HeadersInit}):Promise<TradingGrid[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($instrument_id: String,$status: TradingGridStatus,$price_from: Float,$price_to: Float,$pager: PagerInput,$sort: SortInput,$wallet_id: String) {
                    trading_grids(instrument_id:$instrument_id,status:$status,price_from:$price_from,price_to:$price_to,pager:$pager,sort:$sort,wallet_id:$wallet_id)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'trading_grids')
                }

async trading_grid_levels({args, fields,  headers}:{args?: TradingGridLevelsArgs, fields:((keyof TradingGridLevel) | Partial<Record<keyof TradingGridLevel,any[]>>)[], headers?:HeadersInit}):Promise<TradingGridLevel[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($instrument_id: String,$status: TradingGridLevelStatus,$sell_order_id: String,$buy_order_id: String,$trading_grid_id: String,$pager: PagerInput,$sort: SortInput) {
                    trading_grid_levels(instrument_id:$instrument_id,status:$status,sell_order_id:$sell_order_id,buy_order_id:$buy_order_id,trading_grid_id:$trading_grid_id,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'trading_grid_levels')
                }

async user_fees_config({ fields,  headers}:{ fields:((keyof FxcmFeesConfigType) | Partial<Record<keyof FxcmFeesConfigType,any[]>>)[], headers?:HeadersInit}):Promise<FxcmFeesConfigType>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query {
                    user_fees_config
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,{},headers,'user_fees_config')
                }

async estimate_payment_notional_fee({args,  headers}:{args: EstimatePaymentNotionalFeeArgs,  headers?:HeadersInit}):Promise<number>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($currency_id: String!,$type: PaymentType!,$amount: Float!) {
                    estimate_payment_notional_fee(currency_id:$currency_id,type:$type,amount:$amount)
                        
                }
                `,args || {},headers,'estimate_payment_notional_fee')
                }

async cash_holdings_report({args, fields,  headers}:{args?: CashHoldingsReportArgs, fields:((keyof CashHoldingsReport) | Partial<Record<keyof CashHoldingsReport,any[]>>)[], headers?:HeadersInit}):Promise<CashHoldingsReport[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($user_id: String,$date_range: DateRangeInput) {
                    cash_holdings_report(user_id:$user_id,date_range:$date_range)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'cash_holdings_report')
                }

async trade_tiers({args, fields,  headers}:{args?: TradeTiersArgs, fields:((keyof TradeTier) | Partial<Record<keyof TradeTier,any[]>>)[], headers?:HeadersInit}):Promise<TradeTier[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($tier_id: String,$fee_group_id: String,$name: String,$pager: PagerInput,$sort: SortInput) {
                    trade_tiers(tier_id:$tier_id,fee_group_id:$fee_group_id,name:$name,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'trade_tiers')
                }

async trade_volumes({args, fields,  headers}:{args?: TradeVolumesArgs, fields:((keyof TradesVolume) | Partial<Record<keyof TradesVolume,any[]>>)[], headers?:HeadersInit}):Promise<TradesVolume[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($serial_id: Int,$user_id: String,$pager: PagerInput,$sort: SortInput) {
                    trade_volumes(serial_id:$serial_id,user_id:$user_id,pager:$pager,sort:$sort)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'trade_volumes')
                }

async wallets({args, fields,  headers}:{args?: WalletsArgs, fields:((keyof Wallet) | Partial<Record<keyof Wallet,any[]>>)[], headers?:HeadersInit}):Promise<Wallet[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($wallet_id: String,$user_id: String,$name: String,$description: String,$pager: PagerInput,$sort: SortInput,$dateRange: DateRangeInput) {
                    wallets(wallet_id:$wallet_id,user_id:$user_id,name:$name,description:$description,pager:$pager,sort:$sort,dateRange:$dateRange)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'wallets')
                }

async user_ip_geo_history({args, fields,  headers}:{args?: UserIpGeoHistoryArgs, fields:((keyof UserIpGeoHistory) | Partial<Record<keyof UserIpGeoHistory,any[]>>)[], headers?:HeadersInit}):Promise<UserIpGeoHistory[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($date_ts: String,$user_id: String,$ip_address: String,$country: String,$user_agent: String) {
                    user_ip_geo_history(date_ts:$date_ts,user_id:$user_id,ip_address:$ip_address,country:$country,user_agent:$user_agent)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'user_ip_geo_history')
                }

async user_ip_geo_history_overview({args, fields,  headers}:{args: UserIpGeoHistoryOverviewArgs, fields:((keyof UserIpGeoHistoryOverview) | Partial<Record<keyof UserIpGeoHistoryOverview,any[]>>)[], headers?:HeadersInit}):Promise<UserIpGeoHistoryOverview[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($from_date: String!,$to_date: String!) {
                    user_ip_geo_history_overview(from_date:$from_date,to_date:$to_date)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'user_ip_geo_history_overview')
                }

async user_ip_geo_history_detail({args, fields,  headers}:{args: UserIpGeoHistoryDetailArgs, fields:((keyof User) | Partial<Record<keyof User,any[]>>)[], headers?:HeadersInit}):Promise<User[]>{ 
            if(!headers) headers = {};
            return this.gql_request(gql`
                query($lat: Float!,$lon: Float!,$from_date: String!,$to_date: String!) {
                    user_ip_geo_history_detail(lat:$lat,lon:$lon,from_date:$from_date,to_date:$to_date)
                        {
                            ${buildGraphQLQuery(fields)}
                        }
                }
                `,args || {},headers,'user_ip_geo_history_detail')
                }


    }
    
    