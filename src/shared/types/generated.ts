/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: {};
};

export type CategoriesListResponse = {
  __typename?: 'CategoriesListResponse';
  count: Maybe<Scalars['Int']>;
  items: Maybe<Array<Maybe<Category>>>;
};

export type Category = {
  __typename?: 'Category';
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  roadMapsList: Maybe<Array<Maybe<Map>>>;
};

export type CategoryInput = {
  name: Scalars['String'];
};

export type CategoryMap = {
  __typename?: 'CategoryMap';
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type Map = {
  __typename?: 'Map';
  category: Maybe<CategoryMap>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  node_custom_fields: Maybe<Scalars['JSON']>;
  relation_custom_fields: Maybe<Scalars['JSON']>;
  user: Maybe<UserMap>;
  visible: Maybe<Scalars['Boolean']>;
};

export type MapInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nodes?: InputMaybe<Scalars['JSON']>;
  relations?: InputMaybe<Scalars['JSON']>;
  userId?: InputMaybe<Scalars['String']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

export type MapsListFilters = {
  name?: InputMaybe<Scalars['String']>;
};

export type MapsListResponse = {
  __typename?: 'MapsListResponse';
  count: Maybe<Scalars['Int']>;
  items: Maybe<Array<Maybe<Map>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Maybe<Category>;
  createMap: Maybe<Map>;
  createUser: Maybe<User>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateMapArgs = {
  map: MapInput;
};


export type MutationCreateUserArgs = {
  user: UserInput;
};

export type Query = {
  __typename?: 'Query';
  categoriesList: Maybe<CategoriesListResponse>;
  getCategory: Maybe<Category>;
  mapsList: Maybe<MapsListResponse>;
  user: Maybe<User>;
};


export type QueryGetCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryMapsListArgs = {
  filters?: InputMaybe<MapsListFilters>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  roadMapsList: Maybe<Array<Maybe<Map>>>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UserMap = {
  __typename?: 'UserMap';
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type FetchMapListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMapListQuery = { __typename?: 'Query', mapsList: { __typename?: 'MapsListResponse', count: number, items: Array<{ __typename?: 'Map', id: string, name: string, visible: boolean, node_custom_fields: {}, relation_custom_fields: {} }> } };

export type GetCategoryDetailQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetCategoryDetailQuery = { __typename?: 'Query', getCategory: { __typename?: 'Category', id: string, name: string, roadMapsList: Array<{ __typename?: 'Map', id: string, name: string, visible: boolean, node_custom_fields: {}, relation_custom_fields: {}, user: { __typename?: 'UserMap', email: string, id: string, name: string } }> } };


export const FetchMapListDocument = gql`
    query FetchMapList {
  mapsList {
    count
    items {
      id
      name
      visible
      node_custom_fields
      relation_custom_fields
    }
  }
}
    `;

/**
 * __useFetchMapListQuery__
 *
 * To run a query within a React component, call `useFetchMapListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchMapListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMapListQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchMapListQuery(baseOptions?: Apollo.QueryHookOptions<FetchMapListQuery, FetchMapListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchMapListQuery, FetchMapListQueryVariables>(FetchMapListDocument, options);
      }
export function useFetchMapListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchMapListQuery, FetchMapListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchMapListQuery, FetchMapListQueryVariables>(FetchMapListDocument, options);
        }
export type FetchMapListQueryHookResult = ReturnType<typeof useFetchMapListQuery>;
export type FetchMapListLazyQueryHookResult = ReturnType<typeof useFetchMapListLazyQuery>;
export type FetchMapListQueryResult = Apollo.QueryResult<FetchMapListQuery, FetchMapListQueryVariables>;
export const GetCategoryDetailDocument = gql`
    query getCategoryDetail($id: ID) {
  getCategory(id: $id) {
    id
    name
    roadMapsList {
      id
      name
      visible
      node_custom_fields
      relation_custom_fields
      user {
        email
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetCategoryDetailQuery__
 *
 * To run a query within a React component, call `useGetCategoryDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryDetailQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoryDetailQuery, GetCategoryDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryDetailQuery, GetCategoryDetailQueryVariables>(GetCategoryDetailDocument, options);
      }
export function useGetCategoryDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryDetailQuery, GetCategoryDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryDetailQuery, GetCategoryDetailQueryVariables>(GetCategoryDetailDocument, options);
        }
export type GetCategoryDetailQueryHookResult = ReturnType<typeof useGetCategoryDetailQuery>;
export type GetCategoryDetailLazyQueryHookResult = ReturnType<typeof useGetCategoryDetailLazyQuery>;
export type GetCategoryDetailQueryResult = Apollo.QueryResult<GetCategoryDetailQuery, GetCategoryDetailQueryVariables>;