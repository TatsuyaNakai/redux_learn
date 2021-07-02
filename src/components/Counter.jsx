import React from 'react';
// import { connect } from 'react-redux';
// ↑を使用していたけど、Hooksが導入されてからは、useSelectorで書けるようになった。
import { useSelector } from 'react-redux';

// const mapStateToProps=(state)=>{
//     // ↑は、storeのStateをpropsに変換して、mapで出力してくれるもの
//     return {count: state.count}
//   };
// Hooksで↑をつかわなくてよくなった。

const Counter = () => {
    const count = useSelector((state) => state.count);
    const posts = useSelector((state) => state.posts);
    return (
        <>
            <p>Counter: {count}</p>
            {/* <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.id}, {post.name}</li>
                ))}
            </ul> */}
        </>
    );
};

// export default connect(mapStateToProps)(Counter)
// ↑を使用していたけど、Hooksが導入されてからは、必要なくなった。
export default Counter;