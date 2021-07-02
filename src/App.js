import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Counter from './components/Counter';

const mapStateToProps=(state)=>{
  // ↑は、storeのStateをpropsに変換して、mapで出力してくれるもの
  return ({
    count: state.count,
    posts: state.posts,
  })
};
// console.log(count, post);

const App=({count, posts, dispatch})=>{
  const increment=()=>{
    dispatch({type:'INCREMENT'});
  };
  const decrement=()=>{
    dispatch({type: 'DECREMENT'});
  };
  
  return (
    <div>
      <h1>Redux Learn</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Up</button>
        <button onClick={decrement}>Down</button>
      <ul>
        {posts.map((post, index)=>(
          <li key={post.id}>{index+1}, {post.name}</li>
          // レンダリングされる時にmapが読めない
          // TypeError: Cannot read property 'map' of undefinedとの表示がありました。
        ))}
      </ul>
      <Counter />
    </div>
  );
}

export default connect(mapStateToProps)(App);
// connectは、引数を次の()に繋げる、受け渡すことができる。
// いまでいうと、storeのstateをAppに渡してる。