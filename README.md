# onClickでmapは再度レンダリングされないのでしょうか。
## mapを使用してリストを描画したのですが、レンダリングされるとエラーコードが発生します。mapの使い方に誤認があるかもしれないので、教えてもらいたいです。


初めの画面は問題なくどうさするのですが、onClickイベントが起きた途端にmapが読み込めなくなります。
エラーコードは、「 TypeError: Cannot read property 'map' of undefined」

### 行ったこと
- コメントアウトしました。
App.js 29行目以下の

      <!-- <ul>
        {posts.map((post, index)=>(
          <li key={post.id}>{index+1}, {post.name}</li>
          // レンダリングされる時にmapが読めない
          // TypeError: Cannot read property 'map' of undefinedとの表示がありました。
        ))}
      </ul>
      <Counter /> -->

をコメントアウトしたところ、問題なく表示されます。
レンダリングされる時に何が起きているのかわかりませんでした。

- redux(storeからmapStateToPropsでpropsにして参照する方法)での取得方法の相性が悪いのかと思い、useSelectorで参照したCounter.jsxで挙動の確認。
こちらも同じく以下のエラーコードでした。
「Cannot read property 'map' of undefined」

参考にしたサイトはこちらです。
[REFFECT](https://reffect.co.jp/react/react-redux-for-beginner)

どうして初めのレンダリングではmapで参照ができたのにもかかわらず、次のレンダリング時に見つけることができないのかを教えていただきたいです！

