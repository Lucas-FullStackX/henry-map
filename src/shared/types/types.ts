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

export type Map = {
  __typename?: 'Map';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  node_custom_fields?: Maybe<Scalars['JSON']>;
  relation_custom_fields?: Maybe<Scalars['JSON']>;
  visible?: Maybe<Scalars['Boolean']>;
};

export type MapInput = {
  name?: InputMaybe<Scalars['String']>;
  node_custom_fields?: InputMaybe<Scalars['JSON']>;
  relation_custom_fields?: InputMaybe<Scalars['JSON']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

export type MapListResponse = {
  __typename?: 'MapListResponse';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<Map>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMap?: Maybe<Map>;
  createTask?: Maybe<Task>;
  deleteTask?: Maybe<Scalars['String']>;
  updateTask?: Maybe<Task>;
};


export type MutationCreateMapArgs = {
  map?: InputMaybe<MapInput>;
};


export type MutationCreateTaskArgs = {
  task?: InputMaybe<TaskInput>;
};


export type MutationDeleteTaskArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateTaskArgs = {
  id?: InputMaybe<Scalars['ID']>;
  task?: InputMaybe<TaskInput>;
};

export type Query = {
  __typename?: 'Query';
  MapsList?: Maybe<MapListResponse>;
  getAllTasks?: Maybe<Array<Maybe<Task>>>;
  getTask?: Maybe<Task>;
  hello?: Maybe<Scalars['String']>;
};


export type QueryGetTaskArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Task = {
  __typename?: 'Task';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type TaskInput = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type FetchMapListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMapListQuery = { __typename?: 'Query', MapsList: { __typename?: 'MapListResponse', count: number, items: Array<{ __typename?: 'Map', id: string, name: string, visible: boolean, node_custom_fields: {}, relation_custom_fields: {} }> } };


export const FetchMapListDocument = gql`
    query FetchMapList {
  MapsList {
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