import { GraphQLResolveInfo } from 'graphql'

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
};

export type _AddBusinessCategoriesPayload = {
  __typename?: '_AddBusinessCategoriesPayload';
  from?: Maybe<Business>;
  to?: Maybe<Category>;
};

export type _AddBusinessReviewsPayload = {
  __typename?: '_AddBusinessReviewsPayload';
  from?: Maybe<Review>;
  to?: Maybe<Business>;
};

export type _AddCategoryBusinessesPayload = {
  __typename?: '_AddCategoryBusinessesPayload';
  from?: Maybe<Business>;
  to?: Maybe<Category>;
};

export type _AddReviewBusinessPayload = {
  __typename?: '_AddReviewBusinessPayload';
  from?: Maybe<Review>;
  to?: Maybe<Business>;
};

export type _AddReviewUserPayload = {
  __typename?: '_AddReviewUserPayload';
  from?: Maybe<User>;
  to?: Maybe<Review>;
};

export type _AddUserReviewsPayload = {
  __typename?: '_AddUserReviewsPayload';
  from?: Maybe<User>;
  to?: Maybe<Review>;
};

export type _BusinessFilter = {
  AND?: Maybe<Array<_BusinessFilter>>;
  OR?: Maybe<Array<_BusinessFilter>>;
  businessId?: Maybe<Scalars['ID']>;
  businessId_not?: Maybe<Scalars['ID']>;
  businessId_in?: Maybe<Array<Scalars['ID']>>;
  businessId_not_in?: Maybe<Array<Scalars['ID']>>;
  businessId_contains?: Maybe<Scalars['ID']>;
  businessId_not_contains?: Maybe<Scalars['ID']>;
  businessId_starts_with?: Maybe<Scalars['ID']>;
  businessId_not_starts_with?: Maybe<Scalars['ID']>;
  businessId_ends_with?: Maybe<Scalars['ID']>;
  businessId_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  address_not?: Maybe<Scalars['String']>;
  address_in?: Maybe<Array<Scalars['String']>>;
  address_not_in?: Maybe<Array<Scalars['String']>>;
  address_contains?: Maybe<Scalars['String']>;
  address_not_contains?: Maybe<Scalars['String']>;
  address_starts_with?: Maybe<Scalars['String']>;
  address_not_starts_with?: Maybe<Scalars['String']>;
  address_ends_with?: Maybe<Scalars['String']>;
  address_not_ends_with?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  city_not?: Maybe<Scalars['String']>;
  city_in?: Maybe<Array<Scalars['String']>>;
  city_not_in?: Maybe<Array<Scalars['String']>>;
  city_contains?: Maybe<Scalars['String']>;
  city_not_contains?: Maybe<Scalars['String']>;
  city_starts_with?: Maybe<Scalars['String']>;
  city_not_starts_with?: Maybe<Scalars['String']>;
  city_ends_with?: Maybe<Scalars['String']>;
  city_not_ends_with?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  state_not?: Maybe<Scalars['String']>;
  state_in?: Maybe<Array<Scalars['String']>>;
  state_not_in?: Maybe<Array<Scalars['String']>>;
  state_contains?: Maybe<Scalars['String']>;
  state_not_contains?: Maybe<Scalars['String']>;
  state_starts_with?: Maybe<Scalars['String']>;
  state_not_starts_with?: Maybe<Scalars['String']>;
  state_ends_with?: Maybe<Scalars['String']>;
  state_not_ends_with?: Maybe<Scalars['String']>;
  location?: Maybe<_Neo4jPointInput>;
  location_not?: Maybe<_Neo4jPointInput>;
  location_distance?: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_lt?: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_lte?: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_gt?: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_gte?: Maybe<_Neo4jPointDistanceFilter>;
  reviews?: Maybe<_ReviewFilter>;
  reviews_not?: Maybe<_ReviewFilter>;
  reviews_in?: Maybe<Array<_ReviewFilter>>;
  reviews_not_in?: Maybe<Array<_ReviewFilter>>;
  reviews_some?: Maybe<_ReviewFilter>;
  reviews_none?: Maybe<_ReviewFilter>;
  reviews_single?: Maybe<_ReviewFilter>;
  reviews_every?: Maybe<_ReviewFilter>;
  categories?: Maybe<_CategoryFilter>;
  categories_not?: Maybe<_CategoryFilter>;
  categories_in?: Maybe<Array<_CategoryFilter>>;
  categories_not_in?: Maybe<Array<_CategoryFilter>>;
  categories_some?: Maybe<_CategoryFilter>;
  categories_none?: Maybe<_CategoryFilter>;
  categories_single?: Maybe<_CategoryFilter>;
  categories_every?: Maybe<_CategoryFilter>;
};

export type _BusinessInput = {
  businessId: Scalars['ID'];
};

export enum _BusinessOrdering {
  BusinessIdAsc = 'businessId_asc',
  BusinessIdDesc = 'businessId_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  AddressAsc = 'address_asc',
  AddressDesc = 'address_desc',
  CityAsc = 'city_asc',
  CityDesc = 'city_desc',
  StateAsc = 'state_asc',
  StateDesc = 'state_desc',
  AvgStarsAsc = 'avgStars_asc',
  AvgStarsDesc = 'avgStars_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
}

export type _CategoryFilter = {
  AND?: Maybe<Array<_CategoryFilter>>;
  OR?: Maybe<Array<_CategoryFilter>>;
  name?: Maybe<Scalars['ID']>;
  name_not?: Maybe<Scalars['ID']>;
  name_in?: Maybe<Array<Scalars['ID']>>;
  name_not_in?: Maybe<Array<Scalars['ID']>>;
  name_contains?: Maybe<Scalars['ID']>;
  name_not_contains?: Maybe<Scalars['ID']>;
  name_starts_with?: Maybe<Scalars['ID']>;
  name_not_starts_with?: Maybe<Scalars['ID']>;
  name_ends_with?: Maybe<Scalars['ID']>;
  name_not_ends_with?: Maybe<Scalars['ID']>;
  businesses?: Maybe<_BusinessFilter>;
  businesses_not?: Maybe<_BusinessFilter>;
  businesses_in?: Maybe<Array<_BusinessFilter>>;
  businesses_not_in?: Maybe<Array<_BusinessFilter>>;
  businesses_some?: Maybe<_BusinessFilter>;
  businesses_none?: Maybe<_BusinessFilter>;
  businesses_single?: Maybe<_BusinessFilter>;
  businesses_every?: Maybe<_BusinessFilter>;
};

export type _CategoryInput = {
  name: Scalars['ID'];
};

export enum _CategoryOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
}

export type _MergeBusinessCategoriesPayload = {
  __typename?: '_MergeBusinessCategoriesPayload';
  from?: Maybe<Business>;
  to?: Maybe<Category>;
};

export type _MergeBusinessReviewsPayload = {
  __typename?: '_MergeBusinessReviewsPayload';
  from?: Maybe<Review>;
  to?: Maybe<Business>;
};

export type _MergeCategoryBusinessesPayload = {
  __typename?: '_MergeCategoryBusinessesPayload';
  from?: Maybe<Business>;
  to?: Maybe<Category>;
};

export type _MergeReviewBusinessPayload = {
  __typename?: '_MergeReviewBusinessPayload';
  from?: Maybe<Review>;
  to?: Maybe<Business>;
};

export type _MergeReviewUserPayload = {
  __typename?: '_MergeReviewUserPayload';
  from?: Maybe<User>;
  to?: Maybe<Review>;
};

export type _MergeUserReviewsPayload = {
  __typename?: '_MergeUserReviewsPayload';
  from?: Maybe<User>;
  to?: Maybe<Review>;
};

export type _Neo4jDate = {
  __typename?: '_Neo4jDate';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jDateInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jDateTime = {
  __typename?: '_Neo4jDateTime';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jDateTimeInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalDateTime = {
  __typename?: '_Neo4jLocalDateTime';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalDateTimeInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalTime = {
  __typename?: '_Neo4jLocalTime';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalTimeInput = {
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jPoint = {
  __typename?: '_Neo4jPoint';
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  crs?: Maybe<Scalars['String']>;
  srid?: Maybe<Scalars['Int']>;
};

export type _Neo4jPointDistanceFilter = {
  point: _Neo4jPointInput;
  distance: Scalars['Float'];
};

export type _Neo4jPointInput = {
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  crs?: Maybe<Scalars['String']>;
  srid?: Maybe<Scalars['Int']>;
};

export type _Neo4jTime = {
  __typename?: '_Neo4jTime';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jTimeInput = {
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export enum _RelationDirections {
  In = 'IN',
  Out = 'OUT',
}

export type _RemoveBusinessCategoriesPayload = {
  __typename?: '_RemoveBusinessCategoriesPayload';
  from?: Maybe<Business>;
  to?: Maybe<Category>;
};

export type _RemoveBusinessReviewsPayload = {
  __typename?: '_RemoveBusinessReviewsPayload';
  from?: Maybe<Review>;
  to?: Maybe<Business>;
};

export type _RemoveCategoryBusinessesPayload = {
  __typename?: '_RemoveCategoryBusinessesPayload';
  from?: Maybe<Business>;
  to?: Maybe<Category>;
};

export type _RemoveReviewBusinessPayload = {
  __typename?: '_RemoveReviewBusinessPayload';
  from?: Maybe<Review>;
  to?: Maybe<Business>;
};

export type _RemoveReviewUserPayload = {
  __typename?: '_RemoveReviewUserPayload';
  from?: Maybe<User>;
  to?: Maybe<Review>;
};

export type _RemoveUserReviewsPayload = {
  __typename?: '_RemoveUserReviewsPayload';
  from?: Maybe<User>;
  to?: Maybe<Review>;
};

export type _ReviewFilter = {
  AND?: Maybe<Array<_ReviewFilter>>;
  OR?: Maybe<Array<_ReviewFilter>>;
  reviewId?: Maybe<Scalars['ID']>;
  reviewId_not?: Maybe<Scalars['ID']>;
  reviewId_in?: Maybe<Array<Scalars['ID']>>;
  reviewId_not_in?: Maybe<Array<Scalars['ID']>>;
  reviewId_contains?: Maybe<Scalars['ID']>;
  reviewId_not_contains?: Maybe<Scalars['ID']>;
  reviewId_starts_with?: Maybe<Scalars['ID']>;
  reviewId_not_starts_with?: Maybe<Scalars['ID']>;
  reviewId_ends_with?: Maybe<Scalars['ID']>;
  reviewId_not_ends_with?: Maybe<Scalars['ID']>;
  stars?: Maybe<Scalars['Float']>;
  stars_not?: Maybe<Scalars['Float']>;
  stars_in?: Maybe<Array<Scalars['Float']>>;
  stars_not_in?: Maybe<Array<Scalars['Float']>>;
  stars_lt?: Maybe<Scalars['Float']>;
  stars_lte?: Maybe<Scalars['Float']>;
  stars_gt?: Maybe<Scalars['Float']>;
  stars_gte?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  date?: Maybe<_Neo4jDateInput>;
  date_not?: Maybe<_Neo4jDateInput>;
  date_in?: Maybe<Array<_Neo4jDateInput>>;
  date_not_in?: Maybe<Array<_Neo4jDateInput>>;
  date_lt?: Maybe<_Neo4jDateInput>;
  date_lte?: Maybe<_Neo4jDateInput>;
  date_gt?: Maybe<_Neo4jDateInput>;
  date_gte?: Maybe<_Neo4jDateInput>;
  business?: Maybe<_BusinessFilter>;
  business_not?: Maybe<_BusinessFilter>;
  business_in?: Maybe<Array<_BusinessFilter>>;
  business_not_in?: Maybe<Array<_BusinessFilter>>;
  user?: Maybe<_UserFilter>;
  user_not?: Maybe<_UserFilter>;
  user_in?: Maybe<Array<_UserFilter>>;
  user_not_in?: Maybe<Array<_UserFilter>>;
};

export type _ReviewInput = {
  reviewId: Scalars['ID'];
};

export enum _ReviewOrdering {
  ReviewIdAsc = 'reviewId_asc',
  ReviewIdDesc = 'reviewId_desc',
  StarsAsc = 'stars_asc',
  StarsDesc = 'stars_desc',
  TextAsc = 'text_asc',
  TextDesc = 'text_desc',
  DateAsc = 'date_asc',
  DateDesc = 'date_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
}

export type _UserFilter = {
  AND?: Maybe<Array<_UserFilter>>;
  OR?: Maybe<Array<_UserFilter>>;
  userId?: Maybe<Scalars['ID']>;
  userId_not?: Maybe<Scalars['ID']>;
  userId_in?: Maybe<Array<Scalars['ID']>>;
  userId_not_in?: Maybe<Array<Scalars['ID']>>;
  userId_contains?: Maybe<Scalars['ID']>;
  userId_not_contains?: Maybe<Scalars['ID']>;
  userId_starts_with?: Maybe<Scalars['ID']>;
  userId_not_starts_with?: Maybe<Scalars['ID']>;
  userId_ends_with?: Maybe<Scalars['ID']>;
  userId_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  reviews?: Maybe<_ReviewFilter>;
  reviews_not?: Maybe<_ReviewFilter>;
  reviews_in?: Maybe<Array<_ReviewFilter>>;
  reviews_not_in?: Maybe<Array<_ReviewFilter>>;
  reviews_some?: Maybe<_ReviewFilter>;
  reviews_none?: Maybe<_ReviewFilter>;
  reviews_single?: Maybe<_ReviewFilter>;
  reviews_every?: Maybe<_ReviewFilter>;
};

export type _UserInput = {
  userId: Scalars['ID'];
};

export enum _UserOrdering {
  UserIdAsc = 'userId_asc',
  UserIdDesc = 'userId_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  AvgStarsAsc = 'avgStars_asc',
  AvgStarsDesc = 'avgStars_desc',
  NumReviewsAsc = 'numReviews_asc',
  NumReviewsDesc = 'numReviews_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
}

export type Business = {
  __typename?: 'Business';
  businessId: Scalars['ID'];
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  location?: Maybe<_Neo4jPoint>;
  avgStars?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  _id?: Maybe<Scalars['String']>;
};

export type BusinessReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReviewOrdering>>>;
  filter?: Maybe<_ReviewFilter>;
};

export type BusinessCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CategoryOrdering>>>;
  filter?: Maybe<_CategoryFilter>;
};

export type Category = {
  __typename?: 'Category';
  name: Scalars['ID'];
  businesses?: Maybe<Array<Maybe<Business>>>;
  _id?: Maybe<Scalars['String']>;
};

export type CategoryBusinessesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BusinessOrdering>>>;
  filter?: Maybe<_BusinessFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  mergeBusinessCategory?: Maybe<Business>;
  AddUserReviews?: Maybe<_AddUserReviewsPayload>;
  RemoveUserReviews?: Maybe<_RemoveUserReviewsPayload>;
  MergeUserReviews?: Maybe<_MergeUserReviewsPayload>;
  CreateUser?: Maybe<User>;
  UpdateUser?: Maybe<User>;
  DeleteUser?: Maybe<User>;
  MergeUser?: Maybe<User>;
  AddBusinessReviews?: Maybe<_AddBusinessReviewsPayload>;
  RemoveBusinessReviews?: Maybe<_RemoveBusinessReviewsPayload>;
  MergeBusinessReviews?: Maybe<_MergeBusinessReviewsPayload>;
  AddBusinessCategories?: Maybe<_AddBusinessCategoriesPayload>;
  RemoveBusinessCategories?: Maybe<_RemoveBusinessCategoriesPayload>;
  MergeBusinessCategories?: Maybe<_MergeBusinessCategoriesPayload>;
  CreateBusiness?: Maybe<Business>;
  UpdateBusiness?: Maybe<Business>;
  DeleteBusiness?: Maybe<Business>;
  MergeBusiness?: Maybe<Business>;
  AddReviewBusiness?: Maybe<_AddReviewBusinessPayload>;
  RemoveReviewBusiness?: Maybe<_RemoveReviewBusinessPayload>;
  MergeReviewBusiness?: Maybe<_MergeReviewBusinessPayload>;
  AddReviewUser?: Maybe<_AddReviewUserPayload>;
  RemoveReviewUser?: Maybe<_RemoveReviewUserPayload>;
  MergeReviewUser?: Maybe<_MergeReviewUserPayload>;
  CreateReview?: Maybe<Review>;
  UpdateReview?: Maybe<Review>;
  DeleteReview?: Maybe<Review>;
  MergeReview?: Maybe<Review>;
  AddCategoryBusinesses?: Maybe<_AddCategoryBusinessesPayload>;
  RemoveCategoryBusinesses?: Maybe<_RemoveCategoryBusinessesPayload>;
  MergeCategoryBusinesses?: Maybe<_MergeCategoryBusinessesPayload>;
  CreateCategory?: Maybe<Category>;
  DeleteCategory?: Maybe<Category>;
};

export type MutationMergeBusinessCategoryArgs = {
  categories: Array<Scalars['String']>;
  businessId: Scalars['ID'];
};

export type MutationAddUserReviewsArgs = {
  from: _UserInput;
  to: _ReviewInput;
};

export type MutationRemoveUserReviewsArgs = {
  from: _UserInput;
  to: _ReviewInput;
};

export type MutationMergeUserReviewsArgs = {
  from: _UserInput;
  to: _ReviewInput;
};

export type MutationCreateUserArgs = {
  userId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type MutationUpdateUserArgs = {
  userId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type MutationDeleteUserArgs = {
  userId: Scalars['ID'];
};

export type MutationMergeUserArgs = {
  userId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type MutationAddBusinessReviewsArgs = {
  from: _ReviewInput;
  to: _BusinessInput;
};

export type MutationRemoveBusinessReviewsArgs = {
  from: _ReviewInput;
  to: _BusinessInput;
};

export type MutationMergeBusinessReviewsArgs = {
  from: _ReviewInput;
  to: _BusinessInput;
};

export type MutationAddBusinessCategoriesArgs = {
  from: _BusinessInput;
  to: _CategoryInput;
};

export type MutationRemoveBusinessCategoriesArgs = {
  from: _BusinessInput;
  to: _CategoryInput;
};

export type MutationMergeBusinessCategoriesArgs = {
  from: _BusinessInput;
  to: _CategoryInput;
};

export type MutationCreateBusinessArgs = {
  businessId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  location?: Maybe<_Neo4jPointInput>;
};

export type MutationUpdateBusinessArgs = {
  businessId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  location?: Maybe<_Neo4jPointInput>;
};

export type MutationDeleteBusinessArgs = {
  businessId: Scalars['ID'];
};

export type MutationMergeBusinessArgs = {
  businessId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  location?: Maybe<_Neo4jPointInput>;
};

export type MutationAddReviewBusinessArgs = {
  from: _ReviewInput;
  to: _BusinessInput;
};

export type MutationRemoveReviewBusinessArgs = {
  from: _ReviewInput;
  to: _BusinessInput;
};

export type MutationMergeReviewBusinessArgs = {
  from: _ReviewInput;
  to: _BusinessInput;
};

export type MutationAddReviewUserArgs = {
  from: _UserInput;
  to: _ReviewInput;
};

export type MutationRemoveReviewUserArgs = {
  from: _UserInput;
  to: _ReviewInput;
};

export type MutationMergeReviewUserArgs = {
  from: _UserInput;
  to: _ReviewInput;
};

export type MutationCreateReviewArgs = {
  reviewId?: Maybe<Scalars['ID']>;
  stars?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  date?: Maybe<_Neo4jDateInput>;
};

export type MutationUpdateReviewArgs = {
  reviewId: Scalars['ID'];
  stars?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  date?: Maybe<_Neo4jDateInput>;
};

export type MutationDeleteReviewArgs = {
  reviewId: Scalars['ID'];
};

export type MutationMergeReviewArgs = {
  reviewId: Scalars['ID'];
  stars?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  date?: Maybe<_Neo4jDateInput>;
};

export type MutationAddCategoryBusinessesArgs = {
  from: _BusinessInput;
  to: _CategoryInput;
};

export type MutationRemoveCategoryBusinessesArgs = {
  from: _BusinessInput;
  to: _CategoryInput;
};

export type MutationMergeCategoryBusinessesArgs = {
  from: _BusinessInput;
  to: _CategoryInput;
};

export type MutationCreateCategoryArgs = {
  name?: Maybe<Scalars['ID']>;
};

export type MutationDeleteCategoryArgs = {
  name: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  userCount: Scalars['Int'];
  ratingsCount?: Maybe<Array<Maybe<RatingCount>>>;
  User?: Maybe<Array<Maybe<User>>>;
  Business?: Maybe<Array<Maybe<Business>>>;
  Review?: Maybe<Array<Maybe<Review>>>;
  Category?: Maybe<Array<Maybe<Category>>>;
};

export type QueryUserArgs = {
  userId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  avgStars?: Maybe<Scalars['Float']>;
  numReviews?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};

export type QueryBusinessArgs = {
  businessId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  location?: Maybe<_Neo4jPointInput>;
  avgStars?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BusinessOrdering>>>;
  filter?: Maybe<_BusinessFilter>;
};

export type QueryReviewArgs = {
  reviewId?: Maybe<Scalars['ID']>;
  stars?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  date?: Maybe<_Neo4jDateInput>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReviewOrdering>>>;
  filter?: Maybe<_ReviewFilter>;
};

export type QueryCategoryArgs = {
  name?: Maybe<Scalars['ID']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CategoryOrdering>>>;
  filter?: Maybe<_CategoryFilter>;
};

export type RatingCount = {
  __typename?: 'RatingCount';
  stars: Scalars['Float'];
  count: Scalars['Int'];
};

export type Review = {
  __typename?: 'Review';
  reviewId: Scalars['ID'];
  stars?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  date?: Maybe<_Neo4jDate>;
  business?: Maybe<Business>;
  user?: Maybe<User>;
  _id?: Maybe<Scalars['String']>;
};

export type ReviewBusinessArgs = {
  filter?: Maybe<_BusinessFilter>;
};

export type ReviewUserArgs = {
  filter?: Maybe<_UserFilter>;
};

export type User = {
  __typename?: 'User';
  userId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  avgStars?: Maybe<Scalars['Float']>;
  numReviews?: Maybe<Scalars['Int']>;
  recommendations?: Maybe<Array<Maybe<Business>>>;
  _id?: Maybe<Scalars['String']>;
};

export type UserReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReviewOrdering>>>;
  filter?: Maybe<_ReviewFilter>;
};

export type UserRecommendationsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BusinessOrdering>>>;
};

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
  RatingCount: ResolverTypeWrapper<RatingCount>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  _UserOrdering: _UserOrdering;
  _UserFilter: _UserFilter;
  _ReviewFilter: _ReviewFilter;
  _Neo4jDateInput: _Neo4jDateInput;
  _BusinessFilter: _BusinessFilter;
  _Neo4jPointInput: _Neo4jPointInput;
  _Neo4jPointDistanceFilter: _Neo4jPointDistanceFilter;
  _CategoryFilter: _CategoryFilter;
  User: ResolverTypeWrapper<User>;
  _ReviewOrdering: _ReviewOrdering;
  Review: ResolverTypeWrapper<Review>;
  _Neo4jDate: ResolverTypeWrapper<_Neo4jDate>;
  Business: ResolverTypeWrapper<Business>;
  _Neo4jPoint: ResolverTypeWrapper<_Neo4jPoint>;
  _CategoryOrdering: _CategoryOrdering;
  Category: ResolverTypeWrapper<Category>;
  _BusinessOrdering: _BusinessOrdering;
  Mutation: ResolverTypeWrapper<{}>;
  _UserInput: _UserInput;
  _ReviewInput: _ReviewInput;
  _AddUserReviewsPayload: ResolverTypeWrapper<_AddUserReviewsPayload>;
  _RemoveUserReviewsPayload: ResolverTypeWrapper<_RemoveUserReviewsPayload>;
  _MergeUserReviewsPayload: ResolverTypeWrapper<_MergeUserReviewsPayload>;
  _BusinessInput: _BusinessInput;
  _AddBusinessReviewsPayload: ResolverTypeWrapper<_AddBusinessReviewsPayload>;
  _RemoveBusinessReviewsPayload: ResolverTypeWrapper<
    _RemoveBusinessReviewsPayload
  >;
  _MergeBusinessReviewsPayload: ResolverTypeWrapper<
    _MergeBusinessReviewsPayload
  >;
  _CategoryInput: _CategoryInput;
  _AddBusinessCategoriesPayload: ResolverTypeWrapper<
    _AddBusinessCategoriesPayload
  >;
  _RemoveBusinessCategoriesPayload: ResolverTypeWrapper<
    _RemoveBusinessCategoriesPayload
  >;
  _MergeBusinessCategoriesPayload: ResolverTypeWrapper<
    _MergeBusinessCategoriesPayload
  >;
  _AddReviewBusinessPayload: ResolverTypeWrapper<_AddReviewBusinessPayload>;
  _RemoveReviewBusinessPayload: ResolverTypeWrapper<
    _RemoveReviewBusinessPayload
  >;
  _MergeReviewBusinessPayload: ResolverTypeWrapper<_MergeReviewBusinessPayload>;
  _AddReviewUserPayload: ResolverTypeWrapper<_AddReviewUserPayload>;
  _RemoveReviewUserPayload: ResolverTypeWrapper<_RemoveReviewUserPayload>;
  _MergeReviewUserPayload: ResolverTypeWrapper<_MergeReviewUserPayload>;
  _AddCategoryBusinessesPayload: ResolverTypeWrapper<
    _AddCategoryBusinessesPayload
  >;
  _RemoveCategoryBusinessesPayload: ResolverTypeWrapper<
    _RemoveCategoryBusinessesPayload
  >;
  _MergeCategoryBusinessesPayload: ResolverTypeWrapper<
    _MergeCategoryBusinessesPayload
  >;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  _Neo4jTime: ResolverTypeWrapper<_Neo4jTime>;
  _Neo4jTimeInput: _Neo4jTimeInput;
  _Neo4jDateTime: ResolverTypeWrapper<_Neo4jDateTime>;
  _Neo4jDateTimeInput: _Neo4jDateTimeInput;
  _Neo4jLocalTime: ResolverTypeWrapper<_Neo4jLocalTime>;
  _Neo4jLocalTimeInput: _Neo4jLocalTimeInput;
  _Neo4jLocalDateTime: ResolverTypeWrapper<_Neo4jLocalDateTime>;
  _Neo4jLocalDateTimeInput: _Neo4jLocalDateTimeInput;
  _RelationDirections: _RelationDirections;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Int: Scalars['Int'];
  RatingCount: RatingCount;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  String: Scalars['String'];
  _UserFilter: _UserFilter;
  _ReviewFilter: _ReviewFilter;
  _Neo4jDateInput: _Neo4jDateInput;
  _BusinessFilter: _BusinessFilter;
  _Neo4jPointInput: _Neo4jPointInput;
  _Neo4jPointDistanceFilter: _Neo4jPointDistanceFilter;
  _CategoryFilter: _CategoryFilter;
  User: User;
  Review: Review;
  _Neo4jDate: _Neo4jDate;
  Business: Business;
  _Neo4jPoint: _Neo4jPoint;
  Category: Category;
  Mutation: {};
  _UserInput: _UserInput;
  _ReviewInput: _ReviewInput;
  _AddUserReviewsPayload: _AddUserReviewsPayload;
  _RemoveUserReviewsPayload: _RemoveUserReviewsPayload;
  _MergeUserReviewsPayload: _MergeUserReviewsPayload;
  _BusinessInput: _BusinessInput;
  _AddBusinessReviewsPayload: _AddBusinessReviewsPayload;
  _RemoveBusinessReviewsPayload: _RemoveBusinessReviewsPayload;
  _MergeBusinessReviewsPayload: _MergeBusinessReviewsPayload;
  _CategoryInput: _CategoryInput;
  _AddBusinessCategoriesPayload: _AddBusinessCategoriesPayload;
  _RemoveBusinessCategoriesPayload: _RemoveBusinessCategoriesPayload;
  _MergeBusinessCategoriesPayload: _MergeBusinessCategoriesPayload;
  _AddReviewBusinessPayload: _AddReviewBusinessPayload;
  _RemoveReviewBusinessPayload: _RemoveReviewBusinessPayload;
  _MergeReviewBusinessPayload: _MergeReviewBusinessPayload;
  _AddReviewUserPayload: _AddReviewUserPayload;
  _RemoveReviewUserPayload: _RemoveReviewUserPayload;
  _MergeReviewUserPayload: _MergeReviewUserPayload;
  _AddCategoryBusinessesPayload: _AddCategoryBusinessesPayload;
  _RemoveCategoryBusinessesPayload: _RemoveCategoryBusinessesPayload;
  _MergeCategoryBusinessesPayload: _MergeCategoryBusinessesPayload;
  Boolean: Scalars['Boolean'];
  _Neo4jTime: _Neo4jTime;
  _Neo4jTimeInput: _Neo4jTimeInput;
  _Neo4jDateTime: _Neo4jDateTime;
  _Neo4jDateTimeInput: _Neo4jDateTimeInput;
  _Neo4jLocalTime: _Neo4jLocalTime;
  _Neo4jLocalTimeInput: _Neo4jLocalTimeInput;
  _Neo4jLocalDateTime: _Neo4jLocalDateTime;
  _Neo4jLocalDateTimeInput: _Neo4jLocalDateTimeInput;
};

export type _AddBusinessCategoriesPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_AddBusinessCategoriesPayload'] = ResolversParentTypes['_AddBusinessCategoriesPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['Business']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddBusinessReviewsPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_AddBusinessReviewsPayload'] = ResolversParentTypes['_AddBusinessReviewsPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Business']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddCategoryBusinessesPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_AddCategoryBusinessesPayload'] = ResolversParentTypes['_AddCategoryBusinessesPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['Business']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddReviewBusinessPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_AddReviewBusinessPayload'] = ResolversParentTypes['_AddReviewBusinessPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Business']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddReviewUserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_AddReviewUserPayload'] = ResolversParentTypes['_AddReviewUserPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddUserReviewsPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_AddUserReviewsPayload'] = ResolversParentTypes['_AddUserReviewsPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeBusinessCategoriesPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_MergeBusinessCategoriesPayload'] = ResolversParentTypes['_MergeBusinessCategoriesPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['Business']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeBusinessReviewsPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_MergeBusinessReviewsPayload'] = ResolversParentTypes['_MergeBusinessReviewsPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Business']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeCategoryBusinessesPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_MergeCategoryBusinessesPayload'] = ResolversParentTypes['_MergeCategoryBusinessesPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['Business']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeReviewBusinessPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_MergeReviewBusinessPayload'] = ResolversParentTypes['_MergeReviewBusinessPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Business']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeReviewUserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_MergeReviewUserPayload'] = ResolversParentTypes['_MergeReviewUserPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeUserReviewsPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_MergeUserReviewsPayload'] = ResolversParentTypes['_MergeUserReviewsPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jDateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_Neo4jDate'] = ResolversParentTypes['_Neo4jDate']
> = {
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  formatted?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jDateTimeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_Neo4jDateTime'] = ResolversParentTypes['_Neo4jDateTime']
> = {
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formatted?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jLocalDateTimeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_Neo4jLocalDateTime'] = ResolversParentTypes['_Neo4jLocalDateTime']
> = {
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  formatted?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jLocalTimeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_Neo4jLocalTime'] = ResolversParentTypes['_Neo4jLocalTime']
> = {
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  formatted?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jPointResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_Neo4jPoint'] = ResolversParentTypes['_Neo4jPoint']
> = {
  x?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  y?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  z?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  crs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jTimeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_Neo4jTime'] = ResolversParentTypes['_Neo4jTime']
> = {
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formatted?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveBusinessCategoriesPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_RemoveBusinessCategoriesPayload'] = ResolversParentTypes['_RemoveBusinessCategoriesPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['Business']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveBusinessReviewsPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_RemoveBusinessReviewsPayload'] = ResolversParentTypes['_RemoveBusinessReviewsPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Business']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveCategoryBusinessesPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_RemoveCategoryBusinessesPayload'] = ResolversParentTypes['_RemoveCategoryBusinessesPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['Business']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveReviewBusinessPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_RemoveReviewBusinessPayload'] = ResolversParentTypes['_RemoveReviewBusinessPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Business']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveReviewUserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_RemoveReviewUserPayload'] = ResolversParentTypes['_RemoveReviewUserPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveUserReviewsPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_RemoveUserReviewsPayload'] = ResolversParentTypes['_RemoveUserReviewsPayload']
> = {
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BusinessResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Business'] = ResolversParentTypes['Business']
> = {
  businessId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<
    Maybe<ResolversTypes['_Neo4jPoint']>,
    ParentType,
    ContextType
  >;
  avgStars?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reviews?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Review']>>>,
    ParentType,
    ContextType,
    RequireFields<BusinessReviewsArgs, never>
  >;
  categories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Category']>>>,
    ParentType,
    ContextType,
    RequireFields<BusinessCategoriesArgs, never>
  >;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']
> = {
  name?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  businesses?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Business']>>>,
    ParentType,
    ContextType,
    RequireFields<CategoryBusinessesArgs, never>
  >;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  mergeBusinessCategory?: Resolver<
    Maybe<ResolversTypes['Business']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationMergeBusinessCategoryArgs,
      'categories' | 'businessId'
    >
  >;
  AddUserReviews?: Resolver<
    Maybe<ResolversTypes['_AddUserReviewsPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddUserReviewsArgs, 'from' | 'to'>
  >;
  RemoveUserReviews?: Resolver<
    Maybe<ResolversTypes['_RemoveUserReviewsPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveUserReviewsArgs, 'from' | 'to'>
  >;
  MergeUserReviews?: Resolver<
    Maybe<ResolversTypes['_MergeUserReviewsPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationMergeUserReviewsArgs, 'from' | 'to'>
  >;
  CreateUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, never>
  >;
  UpdateUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, 'userId'>
  >;
  DeleteUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'userId'>
  >;
  MergeUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationMergeUserArgs, 'userId'>
  >;
  AddBusinessReviews?: Resolver<
    Maybe<ResolversTypes['_AddBusinessReviewsPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddBusinessReviewsArgs, 'from' | 'to'>
  >;
  RemoveBusinessReviews?: Resolver<
    Maybe<ResolversTypes['_RemoveBusinessReviewsPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveBusinessReviewsArgs, 'from' | 'to'>
  >;
  MergeBusinessReviews?: Resolver<
    Maybe<ResolversTypes['_MergeBusinessReviewsPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationMergeBusinessReviewsArgs, 'from' | 'to'>
  >;
  AddBusinessCategories?: Resolver<
    Maybe<ResolversTypes['_AddBusinessCategoriesPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddBusinessCategoriesArgs, 'from' | 'to'>
  >;
  RemoveBusinessCategories?: Resolver<
    Maybe<ResolversTypes['_RemoveBusinessCategoriesPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveBusinessCategoriesArgs, 'from' | 'to'>
  >;
  MergeBusinessCategories?: Resolver<
    Maybe<ResolversTypes['_MergeBusinessCategoriesPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationMergeBusinessCategoriesArgs, 'from' | 'to'>
  >;
  CreateBusiness?: Resolver<
    Maybe<ResolversTypes['Business']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateBusinessArgs, 'name'>
  >;
  UpdateBusiness?: Resolver<
    Maybe<ResolversTypes['Business']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateBusinessArgs, 'businessId'>
  >;
  DeleteBusiness?: Resolver<
    Maybe<ResolversTypes['Business']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteBusinessArgs, 'businessId'>
  >;
  MergeBusiness?: Resolver<
    Maybe<ResolversTypes['Business']>,
    ParentType,
    ContextType,
    RequireFields<MutationMergeBusinessArgs, 'businessId'>
  >;
  AddReviewBusiness?: Resolver<
    Maybe<ResolversTypes['_AddReviewBusinessPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddReviewBusinessArgs, 'from' | 'to'>
  >;
  RemoveReviewBusiness?: Resolver<
    Maybe<ResolversTypes['_RemoveReviewBusinessPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveReviewBusinessArgs, 'from' | 'to'>
  >;
  MergeReviewBusiness?: Resolver<
    Maybe<ResolversTypes['_MergeReviewBusinessPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationMergeReviewBusinessArgs, 'from' | 'to'>
  >;
  AddReviewUser?: Resolver<
    Maybe<ResolversTypes['_AddReviewUserPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddReviewUserArgs, 'from' | 'to'>
  >;
  RemoveReviewUser?: Resolver<
    Maybe<ResolversTypes['_RemoveReviewUserPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveReviewUserArgs, 'from' | 'to'>
  >;
  MergeReviewUser?: Resolver<
    Maybe<ResolversTypes['_MergeReviewUserPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationMergeReviewUserArgs, 'from' | 'to'>
  >;
  CreateReview?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateReviewArgs, never>
  >;
  UpdateReview?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateReviewArgs, 'reviewId'>
  >;
  DeleteReview?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteReviewArgs, 'reviewId'>
  >;
  MergeReview?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    RequireFields<MutationMergeReviewArgs, 'reviewId'>
  >;
  AddCategoryBusinesses?: Resolver<
    Maybe<ResolversTypes['_AddCategoryBusinessesPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddCategoryBusinessesArgs, 'from' | 'to'>
  >;
  RemoveCategoryBusinesses?: Resolver<
    Maybe<ResolversTypes['_RemoveCategoryBusinessesPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveCategoryBusinessesArgs, 'from' | 'to'>
  >;
  MergeCategoryBusinesses?: Resolver<
    Maybe<ResolversTypes['_MergeCategoryBusinessesPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationMergeCategoryBusinessesArgs, 'from' | 'to'>
  >;
  CreateCategory?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCategoryArgs, never>
  >;
  DeleteCategory?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCategoryArgs, 'name'>
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  userCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ratingsCount?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['RatingCount']>>>,
    ParentType,
    ContextType
  >;
  User?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, never>
  >;
  Business?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Business']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryBusinessArgs, never>
  >;
  Review?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Review']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryReviewArgs, never>
  >;
  Category?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Category']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryCategoryArgs, never>
  >;
};

export type RatingCountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RatingCount'] = ResolversParentTypes['RatingCount']
> = {
  stars?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']
> = {
  reviewId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stars?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['_Neo4jDate']>, ParentType, ContextType>;
  business?: Resolver<
    Maybe<ResolversTypes['Business']>,
    ParentType,
    ContextType,
    RequireFields<ReviewBusinessArgs, never>
  >;
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<ReviewUserArgs, never>
  >;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviews?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Review']>>>,
    ParentType,
    ContextType,
    RequireFields<UserReviewsArgs, never>
  >;
  avgStars?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numReviews?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recommendations?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Business']>>>,
    ParentType,
    ContextType,
    RequireFields<UserRecommendationsArgs, 'first'>
  >;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  _AddBusinessCategoriesPayload?: _AddBusinessCategoriesPayloadResolvers<
    ContextType
  >;
  _AddBusinessReviewsPayload?: _AddBusinessReviewsPayloadResolvers<ContextType>;
  _AddCategoryBusinessesPayload?: _AddCategoryBusinessesPayloadResolvers<
    ContextType
  >;
  _AddReviewBusinessPayload?: _AddReviewBusinessPayloadResolvers<ContextType>;
  _AddReviewUserPayload?: _AddReviewUserPayloadResolvers<ContextType>;
  _AddUserReviewsPayload?: _AddUserReviewsPayloadResolvers<ContextType>;
  _MergeBusinessCategoriesPayload?: _MergeBusinessCategoriesPayloadResolvers<
    ContextType
  >;
  _MergeBusinessReviewsPayload?: _MergeBusinessReviewsPayloadResolvers<
    ContextType
  >;
  _MergeCategoryBusinessesPayload?: _MergeCategoryBusinessesPayloadResolvers<
    ContextType
  >;
  _MergeReviewBusinessPayload?: _MergeReviewBusinessPayloadResolvers<
    ContextType
  >;
  _MergeReviewUserPayload?: _MergeReviewUserPayloadResolvers<ContextType>;
  _MergeUserReviewsPayload?: _MergeUserReviewsPayloadResolvers<ContextType>;
  _Neo4jDate?: _Neo4jDateResolvers<ContextType>;
  _Neo4jDateTime?: _Neo4jDateTimeResolvers<ContextType>;
  _Neo4jLocalDateTime?: _Neo4jLocalDateTimeResolvers<ContextType>;
  _Neo4jLocalTime?: _Neo4jLocalTimeResolvers<ContextType>;
  _Neo4jPoint?: _Neo4jPointResolvers<ContextType>;
  _Neo4jTime?: _Neo4jTimeResolvers<ContextType>;
  _RemoveBusinessCategoriesPayload?: _RemoveBusinessCategoriesPayloadResolvers<
    ContextType
  >;
  _RemoveBusinessReviewsPayload?: _RemoveBusinessReviewsPayloadResolvers<
    ContextType
  >;
  _RemoveCategoryBusinessesPayload?: _RemoveCategoryBusinessesPayloadResolvers<
    ContextType
  >;
  _RemoveReviewBusinessPayload?: _RemoveReviewBusinessPayloadResolvers<
    ContextType
  >;
  _RemoveReviewUserPayload?: _RemoveReviewUserPayloadResolvers<ContextType>;
  _RemoveUserReviewsPayload?: _RemoveUserReviewsPayloadResolvers<ContextType>;
  Business?: BusinessResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RatingCount?: RatingCountResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
