import { GraphQLClient, gql } from "graphql-request";
import { PostCard, Post } from "./../interfaces/BlogCardInterface";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/clqjodsz5b3q801ukarrs15f7/master"
);

export const getPosts = async (
  limit: number,
  skip: number,
  category: string = "programming",
  searchTerm?: string
): Promise<PostCard[]> => {
  let QUERY;

  if (searchTerm) {// If searchTerm is provided, include it in the query
    QUERY = gql`
      query GetPosts($limit: Int!, $skip: Int!, $searchTerm: String) {
        posts(
          first: $limit
          skip: $skip
          where: { description_contains: $searchTerm }
        ) {
          id
          title
          datePublished
          slug
          description
          category {
            name
          }
          author {
            name
            avatar {
              url
            }
          }
          coverPhoto {
            url
          }
        }
      }
    `;
  } else { // if search by category
    QUERY = gql`
      query GetPosts($limit: Int!, $skip: Int!, $category: String) {
        posts(
          first: $limit
          skip: $skip
          where: { category_some: { name: $category } }
        ) {
          id
          title
          datePublished
          slug
          description
          category {
            name
          }
          author {
            name
            avatar {
              url
            }
          }
          coverPhoto {
            url
          }
        }
      }
    `;
  }

  try {
    const data: { post: PostCard } = await graphcms.request(QUERY, {
      limit,
      skip,
      category,
      searchTerm,
    });
    console.log(data);
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getBlogPost = async (slug: string): Promise<Post | null> => {
  const QUERY = gql`
    query GetBlogPost($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        datePublished
        content {
          html
        }
        category {
          name
        }
        author {
          name
          avatar {
            url
          }
        }
        coverPhoto {
          url
        }
      }
    }
  `;

  try {
    const data: { post: Post } = await graphcms.request(QUERY, {
      slug,
    });
    console.log("getBlogPost from API:", data);
    return data.post;
  } catch (error) {
    console.error("Error fetching data for blog post:", error);
    return null;
  }
};

// export const getPosts = async (limit: number, skip: number): Promise<Post[]> => {
//   const endpoint = 'https://api-eu-west-2.hygraph.com/v2/clqjodsz5b3q801ukarrs15f7/master';
//   const query = `
//     query GetPosts($limit: Int!, $skip: Int!) {
//       posts(first: $limit, skip: $skip) {
//         id
//         title
//         datePublished
//         slug
//         description
//         content {
//           html
//         }
//         author {
//           name
//           avatar {
//             url
//           }
//         }
//         coverPhoto {
//           url
//         }
//       }
//     }
//   `;

//   try {
//     const response = await fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         query,
//         variables: { limit, skip },
//       }),
//     });

//     const { data } = await response.json();
//     console.log("Fetching data:", data);
//     return data.posts;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// };
