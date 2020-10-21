import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  GeoJSONPoint: any;
  /** Time type */
  Time: any;
  /** Date type */
  Date: any;
  DateTime: any;
  Void: any;
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['ID'];
  formatted: Scalars['String'];
  street: Scalars['String'];
  number: Scalars['String'];
  postcode: Scalars['String'];
  city: Scalars['String'];
  county?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  location: Scalars['GeoJSONPoint'];
};

export type AddressInput = {
  id: Scalars['ID'];
  formatted: Scalars['String'];
  street: Scalars['String'];
  number: Scalars['String'];
  postcode: Scalars['String'];
  city: Scalars['String'];
  county?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  location: Scalars['GeoJSONPoint'];
};

export type Analytic = Node & {
  __typename?: 'Analytic';
  id: Scalars['ID'];
  platform?: Maybe<AnalyticPlatform>;
  screen?: Maybe<AnalyticScreen>;
};

export type AnalyticInput = {
  platform?: Maybe<AnalyticPlatformInput>;
  screen?: Maybe<AnalyticScreenInput>;
};

export type AnalyticPlatform = {
  __typename?: 'AnalyticPlatform';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  os?: Maybe<AnalyticPlatformOs>;
  product?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type AnalyticPlatformInput = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  os?: Maybe<AnalyticPlatformOsInput>;
  product?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type AnalyticPlatformOs = {
  __typename?: 'AnalyticPlatformOS';
  architecture?: Maybe<Scalars['Int']>;
  family?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type AnalyticPlatformOsInput = {
  architecture?: Maybe<Scalars['Int']>;
  family?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Analytics = {
  __typename?: 'Analytics';
  cursor?: Maybe<Scalars['ID']>;
  list?: Maybe<Array<Maybe<Analytic>>>;
};

export type AnalyticScreen = {
  __typename?: 'AnalyticScreen';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type AnalyticScreenInput = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Bank = {
  __typename?: 'Bank';
  name?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
};

export type BankInput = {
  name?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
};

export type Companies = {
  __typename?: 'Companies';
  cursor?: Maybe<Scalars['ID']>;
  list?: Maybe<Array<Maybe<Company>>>;
};

export type Company = Node & {
  __typename?: 'Company';
  id: Scalars['ID'];
  email: Scalars['String'];
  replyEmail?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  companyName: Scalars['String'];
  address: Address;
  taxNumber: Scalars['String'];
  phones: Array<Scalars['String']>;
  bank?: Maybe<Bank>;
  approved: Scalars['Boolean'];
  open: TimeWindow;
  website?: Maybe<Scalars['String']>;
  settings?: Maybe<CompanySettings>;
};

export type CompanySettings = {
  __typename?: 'CompanySettings';
  invoiceNumber?: Maybe<CompanySettingsInvoiceNumber>;
  invoiceSchema?: Maybe<Scalars['Int']>;
  smtpServer?: Maybe<CompanySmtpServer>;
};

export type CompanySettingsInput = {
  invoiceNumber?: Maybe<CompanySettingsInvoiceNumber>;
  invoiceSchema?: Maybe<Scalars['Int']>;
  smtpServer?: Maybe<CompanySmtpServerInput>;
};

export enum CompanySettingsInvoiceNumber {
  InvoiceCreationDate = 'invoice_creation_date',
  InvoicePeriodToDate = 'invoice_period_to_date',
}

export type CompanySmtpServer = {
  __typename?: 'CompanySmtpServer';
  host: Scalars['String'];
  port: Scalars['Int'];
  user: Scalars['String'];
};

export type CompanySmtpServerInput = {
  host: Scalars['String'];
  port: Scalars['Int'];
  user: Scalars['String'];
  pass?: Maybe<Scalars['String']>;
};

export type CompanyUpdate = {
  id: Scalars['ID'];
  email: Scalars['String'];
  replyEmail?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  companyName: Scalars['String'];
  address: AddressInput;
  taxNumber: Scalars['String'];
  phones: Array<Maybe<Scalars['String']>>;
  bank?: Maybe<BankInput>;
  open: TimeWindowInput;
  website?: Maybe<Scalars['String']>;
  settings?: Maybe<CompanySettingsInput>;
};

export type Contact = {
  /** id: ID! */
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  id: Scalars['ID'];
  company: Company;
  customer?: Maybe<Customer>;
  name: Scalars['String'];
  address: Address;
  invoiceAddress?: Maybe<Scalars['String']>;
  alternateName?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  invoiceNotesRequired?: Maybe<Scalars['Boolean']>;
  contacts: Array<CustomerContact>;
  cash?: Maybe<Scalars['Boolean']>;
  since?: Maybe<Scalars['Date']>;
  defaultPriceCategory?: Maybe<Scalars['ID']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CustomerContact = Contact & {
  __typename?: 'CustomerContact';
  id: Scalars['ID'];
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<CustomerContactType>>>;
  invoiceVia?: Maybe<Array<Maybe<CustomerContactInvoiceVia>>>;
};

export type CustomerContactInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<CustomerContactType>>>;
  invoiceVia?: Maybe<Array<Maybe<CustomerContactInvoiceVia>>>;
};

export enum CustomerContactInvoiceVia {
  Email = 'email',
  Post = 'post',
}

export enum CustomerContactType {
  Delivery = 'delivery',
  Invoice = 'invoice',
}

export type CustomerCreate = {
  name: Scalars['String'];
  address: AddressInput;
  invoiceAddress?: Maybe<Scalars['String']>;
  alternateName?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  invoiceNotesRequired?: Maybe<Scalars['Boolean']>;
  contacts: Array<CustomerContactInput>;
  cash?: Maybe<Scalars['Boolean']>;
  since?: Maybe<Scalars['Date']>;
  defaultPriceCategory?: Maybe<Scalars['ID']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Customers = {
  __typename?: 'Customers';
  cursor?: Maybe<Scalars['ID']>;
  list?: Maybe<Array<Maybe<Customer>>>;
};

export type CustomerUpdate = {
  id: Scalars['ID'];
  name: Scalars['String'];
  address: AddressInput;
  invoiceAddress?: Maybe<Scalars['String']>;
  alternateName?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  invoiceNotesRequired?: Maybe<Scalars['Boolean']>;
  contacts: Array<CustomerContactInput>;
  cash?: Maybe<Scalars['Boolean']>;
  since?: Maybe<Scalars['Date']>;
  defaultPriceCategory?: Maybe<Scalars['ID']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Distance = Node & {
  __typename?: 'Distance';
  id: Scalars['ID'];
  path: Scalars['String'];
  vehicle: Vehicle;
  distance: Scalars['Float'];
  debug?: Maybe<Scalars['String']>;
};

export type DistanceCreate = {
  path: Scalars['String'];
  vehicle: Vehicle;
  distance: Scalars['Float'];
  debug?: Maybe<Scalars['String']>;
};

export type Invitation = Node & {
  __typename?: 'Invitation';
  id: Scalars['ID'];
  company: Company;
  email: Scalars['String'];
  declined?: Maybe<Scalars['Boolean']>;
};

export type Invitations = {
  __typename?: 'Invitations';
  cursor?: Maybe<Scalars['ID']>;
  list?: Maybe<Array<Maybe<Invitation>>>;
};

export type Invoice = Node & {
  __typename?: 'Invoice';
  id: Scalars['ID'];
  company: Company;
  customer: Customer;
  number: Scalars['String'];
  period: InvoicePeriod;
  date: Scalars['String'];
  pdf?: Maybe<Scalars['String']>;
  prices?: Maybe<InvoicePrices>;
  sent?: Maybe<Scalars['Boolean']>;
  paid?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  activity?: Maybe<Array<Maybe<InvoiceActivity>>>;
  creditNotes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  creditNote?: Maybe<InvoiceCreditNote>;
};

export type InvoiceActivity = {
  __typename?: 'InvoiceActivity';
  action: InvoiceActivityAction;
  timestamp: Scalars['DateTime'];
  number?: Maybe<Scalars['String']>;
  /** orders: [Order] */
  pdf?: Maybe<Scalars['String']>;
  sentVia?: Maybe<CustomerContactInvoiceVia>;
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum InvoiceActivityAction {
  Created = 'created',
  Updated = 'updated',
  Generated = 'generated',
  Sent = 'sent',
  Paid = 'paid',
  Unpaid = 'unpaid',
  Deleted = 'deleted',
  Credited = 'credited',
}

export type InvoiceCredit = {
  id: Scalars['ID'];
  date?: Maybe<Scalars['String']>;
  descriptionCredit?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  descriptionTransferProcess?: Maybe<Scalars['String']>;
};

export type InvoiceCreditNote = {
  __typename?: 'InvoiceCreditNote';
  date?: Maybe<Scalars['String']>;
  descriptionCredit?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  descriptionTransferProcess?: Maybe<Scalars['String']>;
};

export type InvoicePeriod = {
  __typename?: 'InvoicePeriod';
  from: Scalars['Date'];
  to: Scalars['Date'];
};

export type InvoicePeriodInput = {
  from: Scalars['Date'];
  to: Scalars['Date'];
};

export type InvoicePrices = {
  __typename?: 'InvoicePrices';
  nettoByTaxRate?: Maybe<Array<Maybe<PriceByTaxRate>>>;
  netto?: Maybe<Scalars['Float']>;
  brutto?: Maybe<Scalars['Float']>;
};

export type InvoicePricesInput = {
  nettoByTaxRate?: Maybe<Array<Maybe<PriceByTaxRateInput>>>;
  netto?: Maybe<Scalars['Float']>;
  brutto?: Maybe<Scalars['Float']>;
};

export type Invoices = {
  __typename?: 'Invoices';
  cursor?: Maybe<Scalars['ID']>;
  list?: Maybe<Array<Maybe<Invoice>>>;
};

export type InvoicesCreate = {
  period: InvoicePeriodInput;
  customer?: Maybe<Scalars['ID']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Me = {
  __typename?: 'Me';
  email: Scalars['String'];
  name: Scalars['String'];
  address: Address;
  locale: UserLocale;
  phone?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  /** vehicle: Vehicle */
  bank?: Maybe<Bank>;
  role: UserRole;
  invitations?: Maybe<Array<Maybe<Invitation>>>;
  members?: Maybe<Array<Maybe<Member>>>;
  token: Scalars['String'];
};

export type MeLogin = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Member = Node & {
  __typename?: 'Member';
  id: Scalars['ID'];
  company: Company;
  user: User;
  roles: Array<MemberRole>;
  nickname: Scalars['String'];
};

export enum MemberRole {
  Admin = 'admin',
  Dispatcher = 'dispatcher',
  Courier = 'courier',
}

export type Members = {
  __typename?: 'Members';
  cursor?: Maybe<Scalars['ID']>;
  list?: Maybe<Array<Maybe<Member>>>;
};

export type MemberUpdate = {
  id: Scalars['ID'];
  roles: Array<MemberRole>;
  nickname: Scalars['String'];
};

export type MeRegister = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  address: AddressInput;
  locale: Scalars['String'];
  companyName?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  analytic?: Maybe<AnalyticInput>;
};

export type MeUpdate = {
  email: Scalars['String'];
  name: Scalars['String'];
  address: AddressInput;
  phone?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  bank?: Maybe<BankInput>;
};

export type MeUpdateLocale = {
  locale: UserLocale;
};

export type MeUpdatePassword = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  companyUpdate?: Maybe<Company>;
  companyDelete?: Maybe<Company>;
  companyApprove?: Maybe<Company>;
  companyUpdateMy?: Maybe<Company>;
  companyDeleteMy?: Maybe<Company>;
  companyTestSmtp?: Maybe<Scalars['Void']>;
  customerCreate?: Maybe<Customer>;
  customerDelete?: Maybe<Customer>;
  customerUpdate?: Maybe<Customer>;
  invitationCreate?: Maybe<Invitation>;
  invitationDelete?: Maybe<Invitation>;
  invitationResend?: Maybe<Invitation>;
  invitationAccept?: Maybe<Invitation>;
  invitationDecline?: Maybe<Invitation>;
  invoicesCreate?: Maybe<Array<Maybe<Invoice>>>;
  invoiceUpdatePaid?: Maybe<Invoice>;
  invoiceSend?: Maybe<Invoice>;
  invoiceUpdate?: Maybe<Invoice>;
  invoicePdf?: Maybe<Invoice>;
  invoiceDelete?: Maybe<Invoice>;
  invoiceCredit?: Maybe<Invoice>;
  invoicesSendViaEmail?: Maybe<Scalars['Boolean']>;
  memberDelete?: Maybe<Member>;
  memberUpdate?: Maybe<Member>;
  orderCreate?: Maybe<Order>;
  orderDelete?: Maybe<Order>;
  orderUpdate?: Maybe<Order>;
  orderUpdateStatus?: Maybe<Order>;
  orderAssign?: Maybe<Order>;
  orderAssignMe?: Maybe<Order>;
  orderRepost?: Maybe<Order>;
  /** orderReschedule(input: OrderReschedule!): OrderSchedule */
  orderCreateForGuest?: Maybe<Order>;
  orderTemplateCreate?: Maybe<Order>;
  orderTemplateDelete?: Maybe<Order>;
  orderTemplatePublish?: Maybe<Order>;
  orderTemplateSchedule?: Maybe<Order>;
  orderTemplateUpdate?: Maybe<Order>;
  meRegister?: Maybe<Me>;
  meLogin?: Maybe<Me>;
  meDelete?: Maybe<Me>;
  meUpdate?: Maybe<Me>;
  meUpdateLocale?: Maybe<Me>;
  meUpdatePassword?: Maybe<Me>;
  userCreate?: Maybe<User>;
  userDelete?: Maybe<User>;
  userUpdate?: Maybe<User>;
  userUpdatePassword?: Maybe<User>;
  distanceCreate?: Maybe<Distance>;
};

export type MutationCompanyUpdateArgs = {
  input: CompanyUpdate;
};

export type MutationCompanyDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationCompanyApproveArgs = {
  id: Scalars['ID'];
};

export type MutationCompanyUpdateMyArgs = {
  input: CompanyUpdate;
};

export type MutationCustomerCreateArgs = {
  input: CustomerCreate;
  cid?: Maybe<Scalars['ID']>;
};

export type MutationCustomerDeleteArgs = {
  id: Scalars['ID'];
  cid?: Maybe<Scalars['ID']>;
};

export type MutationCustomerUpdateArgs = {
  input: CustomerUpdate;
  cid?: Maybe<Scalars['ID']>;
};

export type MutationInvitationCreateArgs = {
  email: Scalars['String'];
};

export type MutationInvitationDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationInvitationResendArgs = {
  id: Scalars['ID'];
};

export type MutationInvitationAcceptArgs = {
  id: Scalars['ID'];
};

export type MutationInvitationDeclineArgs = {
  id: Scalars['ID'];
};

export type MutationInvoicesCreateArgs = {
  input: InvoicesCreate;
};

export type MutationInvoiceUpdatePaidArgs = {
  id: Scalars['ID'];
  paid: Scalars['Boolean'];
};

export type MutationInvoiceSendArgs = {
  id: Scalars['ID'];
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MutationInvoiceUpdateArgs = {
  id: Scalars['ID'];
  offset?: Maybe<Scalars['Int']>;
};

export type MutationInvoicePdfArgs = {
  id: Scalars['ID'];
  pdf?: Maybe<Scalars['String']>;
  date: Scalars['String'];
  prices: InvoicePricesInput;
};

export type MutationInvoiceDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationInvoiceCreditArgs = {
  input: InvoiceCredit;
};

export type MutationMemberDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationMemberUpdateArgs = {
  input: MemberUpdate;
};

export type MutationOrderCreateArgs = {
  input: OrderCreate;
};

export type MutationOrderDeleteArgs = {
  id: Scalars['ID'];
  confirmation?: Maybe<Scalars['Boolean']>;
};

export type MutationOrderUpdateArgs = {
  input: OrderUpdate;
};

export type MutationOrderUpdateStatusArgs = {
  id: Scalars['ID'];
  status: OrderStatus;
};

export type MutationOrderAssignArgs = {
  id: Scalars['ID'];
  courier?: Maybe<Scalars['ID']>;
};

export type MutationOrderAssignMeArgs = {
  id: Scalars['ID'];
};

export type MutationOrderRepostArgs = {
  id: Scalars['ID'];
};

export type MutationOrderCreateForGuestArgs = {
  company: Scalars['ID'];
  customer: CustomerCreate;
  order: OrderCreate;
};

export type MutationOrderTemplateCreateArgs = {
  input: OrderCreate;
};

export type MutationOrderTemplateDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationOrderTemplatePublishArgs = {
  id: Scalars['ID'];
};

export type MutationOrderTemplateScheduleArgs = {
  id: Scalars['ID'];
  schedule: Array<Maybe<Scalars['Date']>>;
};

export type MutationOrderTemplateUpdateArgs = {
  input: OrderUpdate;
};

export type MutationMeRegisterArgs = {
  input: MeRegister;
};

export type MutationMeLoginArgs = {
  input: MeLogin;
};

export type MutationMeUpdateArgs = {
  input: MeUpdate;
};

export type MutationMeUpdateLocaleArgs = {
  input: MeUpdateLocale;
};

export type MutationMeUpdatePasswordArgs = {
  input: MeUpdatePassword;
};

export type MutationUserCreateArgs = {
  input: UserCreate;
};

export type MutationUserDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationUserUpdateArgs = {
  input: UserUpdate;
};

export type MutationUserUpdatePasswordArgs = {
  input: UserUpdatePassword;
};

export type MutationDistanceCreateArgs = {
  input: DistanceCreate;
};

export type Node = {
  id: Scalars['ID'];
};

export type Order = Node & {
  __typename?: 'Order';
  id: Scalars['ID'];
  company: Company;
  customer?: Maybe<Customer>;
  cash?: Maybe<Scalars['Boolean']>;
  points: Array<OrderPoint>;
  priceCategory?: Maybe<Scalars['JSON']>;
  fees: Array<Scalars['JSON']>;
  courier?: Maybe<Member>;
  courierPayment?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  notesInternal?: Maybe<Scalars['String']>;
  /**
   * draft: Boolean
   * version: Int! # for repeating / reposting
   * activity: [OrderActivity!]! # on database are [[{},...], [{},...]] by version
   */
  prices?: Maybe<Scalars['JSON']>;
  status?: Maybe<OrderStatus>;
  schedule?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type OrderCreate = {
  customer?: Maybe<Scalars['ID']>;
  cash?: Maybe<Scalars['Boolean']>;
  points: Array<OrderPointInput>;
  priceCategory: Scalars['ID'];
  fees: Array<Scalars['JSON']>;
  courier?: Maybe<Scalars['ID']>;
  courierPayment?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  notesInternal?: Maybe<Scalars['String']>;
  prices?: Maybe<Scalars['JSON']>;
  savePointsAsCocs?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type OrderPoint = {
  __typename?: 'OrderPoint';
  id: Scalars['ID'];
  address: Address;
  contact?: Maybe<OrderPointContact>;
  date?: Maybe<Scalars['Date']>;
  time?: Maybe<TimeWindow>;
  notes?: Maybe<Scalars['String']>;
};

export type OrderPointContact = Contact & {
  __typename?: 'OrderPointContact';
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export type OrderPointContactInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export type OrderPointInput = {
  id: Scalars['ID'];
  address: AddressInput;
  contact?: Maybe<OrderPointContactInput>;
  date?: Maybe<Scalars['Date']>;
  time?: Maybe<TimeWindowInput>;
  notes?: Maybe<Scalars['String']>;
};

export type Orders = {
  __typename?: 'Orders';
  cursor?: Maybe<Scalars['ID']>;
  list?: Maybe<Array<Maybe<Order>>>;
};

export enum OrderStatus {
  /**
   * unassigned
   * assigned
   * in_progress
   * completed
   */
  Picked = 'picked',
  Delivered = 'delivered',
}

export type OrderUpdate = {
  id: Scalars['ID'];
  customer?: Maybe<Scalars['ID']>;
  cash?: Maybe<Scalars['Boolean']>;
  points: Array<OrderPointInput>;
  priceCategory: Scalars['ID'];
  fees: Array<Scalars['JSON']>;
  courier?: Maybe<Scalars['ID']>;
  courierPayment?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  notesInternal?: Maybe<Scalars['String']>;
  prices?: Maybe<Scalars['JSON']>;
  savePointsAsCocs?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type PriceByTaxRate = {
  __typename?: 'PriceByTaxRate';
  rate?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
};

export type PriceByTaxRateInput = {
  rate?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  timeout?: Maybe<Scalars['JSON']>;
  infinity?: Maybe<Scalars['JSON']>;
  analytic?: Maybe<Analytic>;
  analytics?: Maybe<Analytics>;
  company?: Maybe<Company>;
  companies?: Maybe<Companies>;
  companiesForGuest?: Maybe<Companies>;
  companiesSearchByCity?: Maybe<Array<Maybe<Company>>>;
  customer?: Maybe<Customer>;
  customers?: Maybe<Customers>;
  invitation?: Maybe<Invitation>;
  invitations?: Maybe<Invitations>;
  invoices?: Maybe<Invoices>;
  member?: Maybe<Member>;
  members?: Maybe<Members>;
  priceCategories?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  priceCategoriesForGuest?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  order?: Maybe<Order>;
  orders?: Maybe<Orders>;
  /** orderSchedule(orderId: ID!, pointId: ID!): OrderSchedule */
  ordersForInvoices?: Maybe<Array<Maybe<Order>>>;
  orderTemplate?: Maybe<Order>;
  orderTemplates?: Maybe<Orders>;
  orderTemplatesForCustomer?: Maybe<Array<Maybe<Order>>>;
  me?: Maybe<Me>;
  user?: Maybe<User>;
  users?: Maybe<Users>;
  distance?: Maybe<Scalars['Float']>;
};

export type QueryTimeoutArgs = {
  ms: Scalars['Int'];
};

export type QueryInfinityArgs = {
  ok: Scalars['Boolean'];
};

export type QueryAnalyticArgs = {
  id: Scalars['ID'];
};

export type QueryAnalyticsArgs = {
  cursor?: Maybe<Scalars['ID']>;
  filter?: Maybe<Scalars['JSON']>;
  search?: Maybe<Scalars['String']>;
};

export type QueryCompanyArgs = {
  id: Scalars['ID'];
};

export type QueryCompaniesArgs = {
  cursor?: Maybe<Scalars['ID']>;
  filter?: Maybe<Scalars['JSON']>;
  search?: Maybe<Scalars['String']>;
};

export type QueryCompaniesForGuestArgs = {
  cursor?: Maybe<Scalars['ID']>;
  search?: Maybe<Scalars['String']>;
  searchAndCity?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryCompaniesSearchByCityArgs = {
  city: Scalars['String'];
};

export type QueryCustomerArgs = {
  id: Scalars['ID'];
};

export type QueryCustomersArgs = {
  cursor?: Maybe<Scalars['ID']>;
  filter?: Maybe<Scalars['JSON']>;
  search?: Maybe<Scalars['String']>;
  cid?: Maybe<Scalars['ID']>;
  all?: Maybe<Scalars['Boolean']>;
};

export type QueryInvitationArgs = {
  id: Scalars['ID'];
};

export type QueryInvitationsArgs = {
  cursor?: Maybe<Scalars['ID']>;
  filter?: Maybe<Scalars['JSON']>;
  search?: Maybe<Scalars['String']>;
};

export type QueryInvoicesArgs = {
  cursor?: Maybe<Scalars['ID']>;
  filter?: Maybe<Scalars['JSON']>;
  search?: Maybe<Scalars['String']>;
  all?: Maybe<Scalars['Boolean']>;
};

export type QueryMemberArgs = {
  id: Scalars['ID'];
};

export type QueryMembersArgs = {
  cursor?: Maybe<Scalars['ID']>;
  filter?: Maybe<Scalars['JSON']>;
  search?: Maybe<Scalars['String']>;
};

export type QueryPriceCategoriesForGuestArgs = {
  company: Scalars['ID'];
};

export type QueryOrderArgs = {
  id: Scalars['ID'];
};

export type QueryOrdersArgs = {
  filter?: Maybe<Scalars['JSON']>;
  search?: Maybe<Scalars['String']>;
  searchFields?: Maybe<Scalars['JSON']>;
  cursor?: Maybe<Scalars['ID']>;
};

export type QueryOrdersForInvoicesArgs = {
  companyId?: Maybe<Scalars['ID']>;
};

export type QueryOrderTemplateArgs = {
  id: Scalars['ID'];
};

export type QueryOrderTemplatesArgs = {
  filter?: Maybe<Scalars['JSON']>;
  search?: Maybe<Scalars['String']>;
  searchFields?: Maybe<Scalars['JSON']>;
  cursor?: Maybe<Scalars['ID']>;
};

export type QueryOrderTemplatesForCustomerArgs = {
  customer: Scalars['ID'];
  limit?: Maybe<Scalars['Int']>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryUsersArgs = {
  cursor?: Maybe<Scalars['ID']>;
  filter?: Maybe<Scalars['JSON']>;
  search?: Maybe<Scalars['String']>;
};

export type QueryDistanceArgs = {
  path: Scalars['String'];
  vehicle: Vehicle;
};

export type TimeWindow = {
  __typename?: 'TimeWindow';
  from?: Maybe<Scalars['Time']>;
  to?: Maybe<Scalars['Time']>;
};

export type TimeWindowInput = {
  from?: Maybe<Scalars['Time']>;
  to?: Maybe<Scalars['Time']>;
};

/** Description for User */
export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  address: Address;
  locale: UserLocale;
  phone?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  /** vehicle: Vehicle */
  bank?: Maybe<Bank>;
};

export type UserCreate = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  address: AddressInput;
  locale: Scalars['String'];
};

export enum UserLocale {
  En = 'en',
  De = 'de',
}

export enum UserRole {
  Admin = 'admin',
  User = 'user',
}

export type Users = {
  __typename?: 'Users';
  cursor?: Maybe<Scalars['ID']>;
  list?: Maybe<Array<Maybe<User>>>;
};

export type UserUpdate = {
  id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  address: AddressInput;
  phone?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  /** vehicle: Vehicle */
  bank?: Maybe<BankInput>;
};

export type UserUpdatePassword = {
  id: Scalars['ID'];
  newPassword: Scalars['String'];
};

export enum Vehicle {
  Walking = 'WALKING',
  Cycling = 'CYCLING',
  Driving = 'DRIVING',
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs> )
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Analytic: ResolverTypeWrapper<Analytic>;
  Node:
    | ResolversTypes['Analytic']
    | ResolversTypes['Company']
    | ResolversTypes['Customer']
    | ResolversTypes['Invitation']
    | ResolversTypes['Invoice']
    | ResolversTypes['Member']
    | ResolversTypes['User']
    | ResolversTypes['Order']
    | ResolversTypes['Distance'];
  AnalyticPlatform: ResolverTypeWrapper<AnalyticPlatform>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AnalyticPlatformOS: ResolverTypeWrapper<AnalyticPlatformOs>;
  AnalyticScreen: ResolverTypeWrapper<AnalyticScreen>;
  Analytics: ResolverTypeWrapper<Analytics>;
  Company: ResolverTypeWrapper<Company>;
  Address: ResolverTypeWrapper<Address>;
  GeoJSONPoint: ResolverTypeWrapper<Scalars['GeoJSONPoint']>;
  Bank: ResolverTypeWrapper<Bank>;
  TimeWindow: ResolverTypeWrapper<TimeWindow>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  CompanySettings: ResolverTypeWrapper<CompanySettings>;
  CompanySettingsInvoiceNumber: CompanySettingsInvoiceNumber;
  CompanySmtpServer: ResolverTypeWrapper<CompanySmtpServer>;
  Companies: ResolverTypeWrapper<Companies>;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerContact: ResolverTypeWrapper<CustomerContact>;
  Contact:
    | ResolversTypes['CustomerContact']
    | ResolversTypes['OrderPointContact'];
  CustomerContactType: CustomerContactType;
  CustomerContactInvoiceVia: CustomerContactInvoiceVia;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Customers: ResolverTypeWrapper<Customers>;
  Invitation: ResolverTypeWrapper<Invitation>;
  Invitations: ResolverTypeWrapper<Invitations>;
  Invoices: ResolverTypeWrapper<Invoices>;
  Invoice: ResolverTypeWrapper<Invoice>;
  InvoicePeriod: ResolverTypeWrapper<InvoicePeriod>;
  InvoicePrices: ResolverTypeWrapper<InvoicePrices>;
  PriceByTaxRate: ResolverTypeWrapper<PriceByTaxRate>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  InvoiceActivity: ResolverTypeWrapper<InvoiceActivity>;
  InvoiceActivityAction: InvoiceActivityAction;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  InvoiceCreditNote: ResolverTypeWrapper<InvoiceCreditNote>;
  Member: ResolverTypeWrapper<Member>;
  User: ResolverTypeWrapper<User>;
  UserLocale: UserLocale;
  MemberRole: MemberRole;
  Members: ResolverTypeWrapper<Members>;
  Order: ResolverTypeWrapper<Order>;
  OrderPoint: ResolverTypeWrapper<OrderPoint>;
  OrderPointContact: ResolverTypeWrapper<OrderPointContact>;
  OrderStatus: OrderStatus;
  Orders: ResolverTypeWrapper<Orders>;
  Me: ResolverTypeWrapper<Me>;
  UserRole: UserRole;
  Users: ResolverTypeWrapper<Users>;
  Vehicle: Vehicle;
  Mutation: ResolverTypeWrapper<{}>;
  CompanyUpdate: CompanyUpdate;
  AddressInput: AddressInput;
  BankInput: BankInput;
  TimeWindowInput: TimeWindowInput;
  CompanySettingsInput: CompanySettingsInput;
  CompanySmtpServerInput: CompanySmtpServerInput;
  Void: ResolverTypeWrapper<Scalars['Void']>;
  CustomerCreate: CustomerCreate;
  CustomerContactInput: CustomerContactInput;
  CustomerUpdate: CustomerUpdate;
  InvoicesCreate: InvoicesCreate;
  InvoicePeriodInput: InvoicePeriodInput;
  InvoicePricesInput: InvoicePricesInput;
  PriceByTaxRateInput: PriceByTaxRateInput;
  InvoiceCredit: InvoiceCredit;
  MemberUpdate: MemberUpdate;
  OrderCreate: OrderCreate;
  OrderPointInput: OrderPointInput;
  OrderPointContactInput: OrderPointContactInput;
  OrderUpdate: OrderUpdate;
  MeRegister: MeRegister;
  AnalyticInput: AnalyticInput;
  AnalyticPlatformInput: AnalyticPlatformInput;
  AnalyticPlatformOSInput: AnalyticPlatformOsInput;
  AnalyticScreenInput: AnalyticScreenInput;
  MeLogin: MeLogin;
  MeUpdate: MeUpdate;
  MeUpdateLocale: MeUpdateLocale;
  MeUpdatePassword: MeUpdatePassword;
  UserCreate: UserCreate;
  UserUpdate: UserUpdate;
  UserUpdatePassword: UserUpdatePassword;
  DistanceCreate: DistanceCreate;
  Distance: ResolverTypeWrapper<Distance>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Analytic: Analytic;
  Node:
    | ResolversParentTypes['Analytic']
    | ResolversParentTypes['Company']
    | ResolversParentTypes['Customer']
    | ResolversParentTypes['Invitation']
    | ResolversParentTypes['Invoice']
    | ResolversParentTypes['Member']
    | ResolversParentTypes['User']
    | ResolversParentTypes['Order']
    | ResolversParentTypes['Distance'];
  AnalyticPlatform: AnalyticPlatform;
  String: Scalars['String'];
  AnalyticPlatformOS: AnalyticPlatformOs;
  AnalyticScreen: AnalyticScreen;
  Analytics: Analytics;
  Company: Company;
  Address: Address;
  GeoJSONPoint: Scalars['GeoJSONPoint'];
  Bank: Bank;
  TimeWindow: TimeWindow;
  Time: Scalars['Time'];
  CompanySettings: CompanySettings;
  CompanySmtpServer: CompanySmtpServer;
  Companies: Companies;
  Customer: Customer;
  CustomerContact: CustomerContact;
  Contact:
    | ResolversParentTypes['CustomerContact']
    | ResolversParentTypes['OrderPointContact'];
  Date: Scalars['Date'];
  Customers: Customers;
  Invitation: Invitation;
  Invitations: Invitations;
  Invoices: Invoices;
  Invoice: Invoice;
  InvoicePeriod: InvoicePeriod;
  InvoicePrices: InvoicePrices;
  PriceByTaxRate: PriceByTaxRate;
  Float: Scalars['Float'];
  InvoiceActivity: InvoiceActivity;
  DateTime: Scalars['DateTime'];
  InvoiceCreditNote: InvoiceCreditNote;
  Member: Member;
  User: User;
  Members: Members;
  Order: Order;
  OrderPoint: OrderPoint;
  OrderPointContact: OrderPointContact;
  Orders: Orders;
  Me: Me;
  Users: Users;
  Mutation: {};
  CompanyUpdate: CompanyUpdate;
  AddressInput: AddressInput;
  BankInput: BankInput;
  TimeWindowInput: TimeWindowInput;
  CompanySettingsInput: CompanySettingsInput;
  CompanySmtpServerInput: CompanySmtpServerInput;
  Void: Scalars['Void'];
  CustomerCreate: CustomerCreate;
  CustomerContactInput: CustomerContactInput;
  CustomerUpdate: CustomerUpdate;
  InvoicesCreate: InvoicesCreate;
  InvoicePeriodInput: InvoicePeriodInput;
  InvoicePricesInput: InvoicePricesInput;
  PriceByTaxRateInput: PriceByTaxRateInput;
  InvoiceCredit: InvoiceCredit;
  MemberUpdate: MemberUpdate;
  OrderCreate: OrderCreate;
  OrderPointInput: OrderPointInput;
  OrderPointContactInput: OrderPointContactInput;
  OrderUpdate: OrderUpdate;
  MeRegister: MeRegister;
  AnalyticInput: AnalyticInput;
  AnalyticPlatformInput: AnalyticPlatformInput;
  AnalyticPlatformOSInput: AnalyticPlatformOsInput;
  AnalyticScreenInput: AnalyticScreenInput;
  MeLogin: MeLogin;
  MeUpdate: MeUpdate;
  MeUpdateLocale: MeUpdateLocale;
  MeUpdatePassword: MeUpdatePassword;
  UserCreate: UserCreate;
  UserUpdate: UserUpdate;
  UserUpdatePassword: UserUpdatePassword;
  DistanceCreate: DistanceCreate;
  Distance: Distance;
};

export type AddressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  formatted?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postcode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  county?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['GeoJSONPoint'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Analytic'] = ResolversParentTypes['Analytic']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  platform?: Resolver<
    Maybe<ResolversTypes['AnalyticPlatform']>,
    ParentType,
    ContextType
  >;
  screen?: Resolver<
    Maybe<ResolversTypes['AnalyticScreen']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticPlatformResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AnalyticPlatform'] = ResolversParentTypes['AnalyticPlatform']
> = {
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  os?: Resolver<
    Maybe<ResolversTypes['AnalyticPlatformOS']>,
    ParentType,
    ContextType
  >;
  product?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticPlatformOsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AnalyticPlatformOS'] = ResolversParentTypes['AnalyticPlatformOS']
> = {
  architecture?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  family?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Analytics'] = ResolversParentTypes['Analytics']
> = {
  cursor?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  list?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Analytic']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticScreenResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AnalyticScreen'] = ResolversParentTypes['AnalyticScreen']
> = {
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BankResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Bank'] = ResolversParentTypes['Bank']
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iban?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompaniesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Companies'] = ResolversParentTypes['Companies']
> = {
  cursor?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  list?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Company']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  replyEmail?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  taxNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phones?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  bank?: Resolver<Maybe<ResolversTypes['Bank']>, ParentType, ContextType>;
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['TimeWindow'], ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  settings?: Resolver<
    Maybe<ResolversTypes['CompanySettings']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanySettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CompanySettings'] = ResolversParentTypes['CompanySettings']
> = {
  invoiceNumber?: Resolver<
    Maybe<ResolversTypes['CompanySettingsInvoiceNumber']>,
    ParentType,
    ContextType
  >;
  invoiceSchema?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  smtpServer?: Resolver<
    Maybe<ResolversTypes['CompanySmtpServer']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanySmtpServerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CompanySmtpServer'] = ResolversParentTypes['CompanySmtpServer']
> = {
  host?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  port?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']
> = {
  __resolveType: TypeResolveFn<
    'CustomerContact' | 'OrderPointContact',
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  department?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  building?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type CustomerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  customer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  invoiceAddress?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  alternateName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invoiceNotesRequired?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  contacts?: Resolver<
    Array<ResolversTypes['CustomerContact']>,
    ParentType,
    ContextType
  >;
  cash?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  since?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  defaultPriceCategory?: Resolver<
    Maybe<ResolversTypes['ID']>,
    ParentType,
    ContextType
  >;
  categories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerContactResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CustomerContact'] = ResolversParentTypes['CustomerContact']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  department?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  building?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['CustomerContactType']>>>,
    ParentType,
    ContextType
  >;
  invoiceVia?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['CustomerContactInvoiceVia']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Customers'] = ResolversParentTypes['Customers']
> = {
  cursor?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  list?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Customer']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DistanceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Distance'] = ResolversParentTypes['Distance']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vehicle?: Resolver<ResolversTypes['Vehicle'], ParentType, ContextType>;
  distance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  debug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GeoJsonPointScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['GeoJSONPoint'], any> {
  name: 'GeoJSONPoint';
}

export type InvitationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Invitation'] = ResolversParentTypes['Invitation']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  declined?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvitationsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Invitations'] = ResolversParentTypes['Invitations']
> = {
  cursor?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  list?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Invitation']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Invoice'] = ResolversParentTypes['Invoice']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['InvoicePeriod'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pdf?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prices?: Resolver<
    Maybe<ResolversTypes['InvoicePrices']>,
    ParentType,
    ContextType
  >;
  sent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  activity?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['InvoiceActivity']>>>,
    ParentType,
    ContextType
  >;
  creditNotes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ID']>>>,
    ParentType,
    ContextType
  >;
  creditNote?: Resolver<
    Maybe<ResolversTypes['InvoiceCreditNote']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceActivityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['InvoiceActivity'] = ResolversParentTypes['InvoiceActivity']
> = {
  action?: Resolver<
    ResolversTypes['InvoiceActivityAction'],
    ParentType,
    ContextType
  >;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pdf?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sentVia?: Resolver<
    Maybe<ResolversTypes['CustomerContactInvoiceVia']>,
    ParentType,
    ContextType
  >;
  emails?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceCreditNoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['InvoiceCreditNote'] = ResolversParentTypes['InvoiceCreditNote']
> = {
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descriptionCredit?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  descriptionTransferProcess?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoicePeriodResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['InvoicePeriod'] = ResolversParentTypes['InvoicePeriod']
> = {
  from?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoicePricesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['InvoicePrices'] = ResolversParentTypes['InvoicePrices']
> = {
  nettoByTaxRate?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PriceByTaxRate']>>>,
    ParentType,
    ContextType
  >;
  netto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  brutto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoicesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Invoices'] = ResolversParentTypes['Invoices']
> = {
  cursor?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  list?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Invoice']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['UserLocale'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taxNumber?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  bank?: Resolver<Maybe<ResolversTypes['Bank']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  invitations?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Invitation']>>>,
    ParentType,
    ContextType
  >;
  members?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Member']>>>,
    ParentType,
    ContextType
  >;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  roles?: Resolver<
    Array<ResolversTypes['MemberRole']>,
    ParentType,
    ContextType
  >;
  nickname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Members'] = ResolversParentTypes['Members']
> = {
  cursor?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  list?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Member']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  companyUpdate?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationCompanyUpdateArgs, 'input'>
  >;
  companyDelete?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationCompanyDeleteArgs, 'id'>
  >;
  companyApprove?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationCompanyApproveArgs, 'id'>
  >;
  companyUpdateMy?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationCompanyUpdateMyArgs, 'input'>
  >;
  companyDeleteMy?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType
  >;
  companyTestSmtp?: Resolver<
    Maybe<ResolversTypes['Void']>,
    ParentType,
    ContextType
  >;
  customerCreate?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    RequireFields<MutationCustomerCreateArgs, 'input'>
  >;
  customerDelete?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    RequireFields<MutationCustomerDeleteArgs, 'id'>
  >;
  customerUpdate?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    RequireFields<MutationCustomerUpdateArgs, 'input'>
  >;
  invitationCreate?: Resolver<
    Maybe<ResolversTypes['Invitation']>,
    ParentType,
    ContextType,
    RequireFields<MutationInvitationCreateArgs, 'email'>
  >;
  invitationDelete?: Resolver<
    Maybe<ResolversTypes['Invitation']>,
    ParentType,
    ContextType,
    RequireFields<MutationInvitationDeleteArgs, 'id'>
  >;
  invitationResend?: Resolver<
    Maybe<ResolversTypes['Invitation']>,
    ParentType,
    ContextType,
    RequireFields<MutationInvitationResendArgs, 'id'>
  >;
  invitationAccept?: Resolver<
    Maybe<ResolversTypes['Invitation']>,
    ParentType,
    ContextType,
    RequireFields<MutationInvitationAcceptArgs, 'id'>
  >;
  invitationDecline?: Resolver<
    Maybe<ResolversTypes['Invitation']>,
    ParentType,
    ContextType,
    RequireFields<MutationInvitationDeclineArgs, 'id'>
  >;
  invoicesCreate?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Invoice']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationInvoicesCreateArgs, 'input'>
  >;
  invoiceUpdatePaid?: Resolver<
    Maybe<ResolversTypes['Invoice']>,
    ParentType,
    ContextType,
    RequireFields<MutationInvoiceUpdatePaidArgs, 'id' | 'paid'>
  >;
  invoiceSend?: Resolver<
    Maybe<ResolversTypes['Invoice']>,
    ParentType,
    ContextType,
    RequireFields<MutationInvoiceSendArgs, 'id'>
  >;
  invoiceUpdate?: Resolver<
    Maybe<ResolversTypes['Invoice']>,
    ParentType,
    ContextType,
    RequireFields<MutationInvoiceUpdateArgs, 'id'>
  >;
  invoicePdf?: Resolver<
    Maybe<ResolversTypes['Invoice']>,
    ParentType,
    ContextType,
    RequireFields<MutationInvoicePdfArgs, 'id' | 'date' | 'prices'>
  >;
  invoiceDelete?: Resolver<
    Maybe<ResolversTypes['Invoice']>,
    ParentType,
    ContextType,
    RequireFields<MutationInvoiceDeleteArgs, 'id'>
  >;
  invoiceCredit?: Resolver<
    Maybe<ResolversTypes['Invoice']>,
    ParentType,
    ContextType,
    RequireFields<MutationInvoiceCreditArgs, 'input'>
  >;
  invoicesSendViaEmail?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  memberDelete?: Resolver<
    Maybe<ResolversTypes['Member']>,
    ParentType,
    ContextType,
    RequireFields<MutationMemberDeleteArgs, 'id'>
  >;
  memberUpdate?: Resolver<
    Maybe<ResolversTypes['Member']>,
    ParentType,
    ContextType,
    RequireFields<MutationMemberUpdateArgs, 'input'>
  >;
  orderCreate?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationOrderCreateArgs, 'input'>
  >;
  orderDelete?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationOrderDeleteArgs, 'id'>
  >;
  orderUpdate?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationOrderUpdateArgs, 'input'>
  >;
  orderUpdateStatus?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationOrderUpdateStatusArgs, 'id' | 'status'>
  >;
  orderAssign?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationOrderAssignArgs, 'id'>
  >;
  orderAssignMe?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationOrderAssignMeArgs, 'id'>
  >;
  orderRepost?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationOrderRepostArgs, 'id'>
  >;
  orderCreateForGuest?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationOrderCreateForGuestArgs,
      'company' | 'customer' | 'order'
    >
  >;
  orderTemplateCreate?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationOrderTemplateCreateArgs, 'input'>
  >;
  orderTemplateDelete?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationOrderTemplateDeleteArgs, 'id'>
  >;
  orderTemplatePublish?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationOrderTemplatePublishArgs, 'id'>
  >;
  orderTemplateSchedule?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationOrderTemplateScheduleArgs, 'id' | 'schedule'>
  >;
  orderTemplateUpdate?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationOrderTemplateUpdateArgs, 'input'>
  >;
  meRegister?: Resolver<
    Maybe<ResolversTypes['Me']>,
    ParentType,
    ContextType,
    RequireFields<MutationMeRegisterArgs, 'input'>
  >;
  meLogin?: Resolver<
    Maybe<ResolversTypes['Me']>,
    ParentType,
    ContextType,
    RequireFields<MutationMeLoginArgs, 'input'>
  >;
  meDelete?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType>;
  meUpdate?: Resolver<
    Maybe<ResolversTypes['Me']>,
    ParentType,
    ContextType,
    RequireFields<MutationMeUpdateArgs, 'input'>
  >;
  meUpdateLocale?: Resolver<
    Maybe<ResolversTypes['Me']>,
    ParentType,
    ContextType,
    RequireFields<MutationMeUpdateLocaleArgs, 'input'>
  >;
  meUpdatePassword?: Resolver<
    Maybe<ResolversTypes['Me']>,
    ParentType,
    ContextType,
    RequireFields<MutationMeUpdatePasswordArgs, 'input'>
  >;
  userCreate?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationUserCreateArgs, 'input'>
  >;
  userDelete?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationUserDeleteArgs, 'id'>
  >;
  userUpdate?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationUserUpdateArgs, 'input'>
  >;
  userUpdatePassword?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationUserUpdatePasswordArgs, 'input'>
  >;
  distanceCreate?: Resolver<
    Maybe<ResolversTypes['Distance']>,
    ParentType,
    ContextType,
    RequireFields<MutationDistanceCreateArgs, 'input'>
  >;
};

export type NodeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']
> = {
  __resolveType: TypeResolveFn<
    | 'Analytic'
    | 'Company'
    | 'Customer'
    | 'Invitation'
    | 'Invoice'
    | 'Member'
    | 'User'
    | 'Order'
    | 'Distance',
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type OrderResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  customer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType
  >;
  cash?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  points?: Resolver<
    Array<ResolversTypes['OrderPoint']>,
    ParentType,
    ContextType
  >;
  priceCategory?: Resolver<
    Maybe<ResolversTypes['JSON']>,
    ParentType,
    ContextType
  >;
  fees?: Resolver<Array<ResolversTypes['JSON']>, ParentType, ContextType>;
  courier?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  courierPayment?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notesInternal?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  prices?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  status?: Resolver<
    Maybe<ResolversTypes['OrderStatus']>,
    ParentType,
    ContextType
  >;
  schedule?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Date']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderPointResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OrderPoint'] = ResolversParentTypes['OrderPoint']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  contact?: Resolver<
    Maybe<ResolversTypes['OrderPointContact']>,
    ParentType,
    ContextType
  >;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['TimeWindow']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderPointContactResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OrderPointContact'] = ResolversParentTypes['OrderPointContact']
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  department?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  building?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrdersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Orders'] = ResolversParentTypes['Orders']
> = {
  cursor?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  list?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Order']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceByTaxRateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PriceByTaxRate'] = ResolversParentTypes['PriceByTaxRate']
> = {
  rate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  timeout?: Resolver<
    Maybe<ResolversTypes['JSON']>,
    ParentType,
    ContextType,
    RequireFields<QueryTimeoutArgs, 'ms'>
  >;
  infinity?: Resolver<
    Maybe<ResolversTypes['JSON']>,
    ParentType,
    ContextType,
    RequireFields<QueryInfinityArgs, 'ok'>
  >;
  analytic?: Resolver<
    Maybe<ResolversTypes['Analytic']>,
    ParentType,
    ContextType,
    RequireFields<QueryAnalyticArgs, 'id'>
  >;
  analytics?: Resolver<
    Maybe<ResolversTypes['Analytics']>,
    ParentType,
    ContextType,
    RequireFields<QueryAnalyticsArgs, never>
  >;
  company?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<QueryCompanyArgs, 'id'>
  >;
  companies?: Resolver<
    Maybe<ResolversTypes['Companies']>,
    ParentType,
    ContextType,
    RequireFields<QueryCompaniesArgs, never>
  >;
  companiesForGuest?: Resolver<
    Maybe<ResolversTypes['Companies']>,
    ParentType,
    ContextType,
    RequireFields<QueryCompaniesForGuestArgs, never>
  >;
  companiesSearchByCity?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Company']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryCompaniesSearchByCityArgs, 'city'>
  >;
  customer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    RequireFields<QueryCustomerArgs, 'id'>
  >;
  customers?: Resolver<
    Maybe<ResolversTypes['Customers']>,
    ParentType,
    ContextType,
    RequireFields<QueryCustomersArgs, never>
  >;
  invitation?: Resolver<
    Maybe<ResolversTypes['Invitation']>,
    ParentType,
    ContextType,
    RequireFields<QueryInvitationArgs, 'id'>
  >;
  invitations?: Resolver<
    Maybe<ResolversTypes['Invitations']>,
    ParentType,
    ContextType,
    RequireFields<QueryInvitationsArgs, never>
  >;
  invoices?: Resolver<
    Maybe<ResolversTypes['Invoices']>,
    ParentType,
    ContextType,
    RequireFields<QueryInvoicesArgs, never>
  >;
  member?: Resolver<
    Maybe<ResolversTypes['Member']>,
    ParentType,
    ContextType,
    RequireFields<QueryMemberArgs, 'id'>
  >;
  members?: Resolver<
    Maybe<ResolversTypes['Members']>,
    ParentType,
    ContextType,
    RequireFields<QueryMembersArgs, never>
  >;
  priceCategories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['JSON']>>>,
    ParentType,
    ContextType
  >;
  priceCategoriesForGuest?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['JSON']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryPriceCategoriesForGuestArgs, 'company'>
  >;
  order?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<QueryOrderArgs, 'id'>
  >;
  orders?: Resolver<
    Maybe<ResolversTypes['Orders']>,
    ParentType,
    ContextType,
    RequireFields<QueryOrdersArgs, never>
  >;
  ordersForInvoices?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Order']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryOrdersForInvoicesArgs, never>
  >;
  orderTemplate?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<QueryOrderTemplateArgs, 'id'>
  >;
  orderTemplates?: Resolver<
    Maybe<ResolversTypes['Orders']>,
    ParentType,
    ContextType,
    RequireFields<QueryOrderTemplatesArgs, never>
  >;
  orderTemplatesForCustomer?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Order']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryOrderTemplatesForCustomerArgs, 'customer'>
  >;
  me?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType>;
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, 'id'>
  >;
  users?: Resolver<
    Maybe<ResolversTypes['Users']>,
    ParentType,
    ContextType,
    RequireFields<QueryUsersArgs, never>
  >;
  distance?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType,
    RequireFields<QueryDistanceArgs, 'path' | 'vehicle'>
  >;
};

export interface TimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type TimeWindowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TimeWindow'] = ResolversParentTypes['TimeWindow']
> = {
  from?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['UserLocale'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taxNumber?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  bank?: Resolver<Maybe<ResolversTypes['Bank']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Users'] = ResolversParentTypes['Users']
> = {
  cursor?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  list?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface VoidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  Analytic?: AnalyticResolvers<ContextType>;
  AnalyticPlatform?: AnalyticPlatformResolvers<ContextType>;
  AnalyticPlatformOS?: AnalyticPlatformOsResolvers<ContextType>;
  Analytics?: AnalyticsResolvers<ContextType>;
  AnalyticScreen?: AnalyticScreenResolvers<ContextType>;
  Bank?: BankResolvers<ContextType>;
  Companies?: CompaniesResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  CompanySettings?: CompanySettingsResolvers<ContextType>;
  CompanySmtpServer?: CompanySmtpServerResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  CustomerContact?: CustomerContactResolvers<ContextType>;
  Customers?: CustomersResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Distance?: DistanceResolvers<ContextType>;
  GeoJSONPoint?: GraphQLScalarType;
  Invitation?: InvitationResolvers<ContextType>;
  Invitations?: InvitationsResolvers<ContextType>;
  Invoice?: InvoiceResolvers<ContextType>;
  InvoiceActivity?: InvoiceActivityResolvers<ContextType>;
  InvoiceCreditNote?: InvoiceCreditNoteResolvers<ContextType>;
  InvoicePeriod?: InvoicePeriodResolvers<ContextType>;
  InvoicePrices?: InvoicePricesResolvers<ContextType>;
  Invoices?: InvoicesResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Me?: MeResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  Members?: MembersResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderPoint?: OrderPointResolvers<ContextType>;
  OrderPointContact?: OrderPointContactResolvers<ContextType>;
  Orders?: OrdersResolvers<ContextType>;
  PriceByTaxRate?: PriceByTaxRateResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Time?: GraphQLScalarType;
  TimeWindow?: TimeWindowResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Users?: UsersResolvers<ContextType>;
  Void?: GraphQLScalarType;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
