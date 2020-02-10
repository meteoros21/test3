class PostApi {

    constructor() {
        this.itemsPerPage = 10;
        this.postList = new Array();

        this.postList.push({no: 1, title: 'Hello World', writer:'홍길동', regDate: '2019-03-09', hitCnt: 12, body: 'It is the first Post'});
        this.postList.push({no: 2, title: 'Hello World2', writer:'김만득',  regDate: '2019-03-09', hitCnt: 18, body: '내용없음'});
        this.postList.push({no: 3, title: 'Hello World3', writer:'잠만보',  regDate: '2019-03-09', hitCnt: 32, body: '내용없음'});
        this.postList.push({no: 4, title: 'Hello World4', writer:'피카츄',  regDate: '2019-03-09', hitCnt: 192, body: '내용없음<br>Hello World<br>힘내라.'});
        this.postList.push({no: 5, title: 'Hello World5', writer:'영심이',  regDate: '2019-03-09', hitCnt: 44, body: '내용없음'});
        this.postList.push({no: 6, title: 'Hello World', writer:'홍길동', regDate: '2019-03-09', hitCnt: 12, body: '내용없음'});
        this.postList.push({no: 7, title: 'Hello World2', writer:'김만득',  regDate: '2019-03-09', hitCnt: 18, body: '내용없음'});
        this.postList.push({no: 8, title: 'Hello World3', writer:'잠만보',  regDate: '2019-03-09', hitCnt: 32, body: '내용없음'});
        this.postList.push({no: 9, title: 'Hello World4', writer:'피카츄3',  regDate: '2019-03-09', hitCnt: 192, body: '내용없음'});
        this.postList.push({no: 10, title: 'Hello World5', writer:'영심이2',  regDate: '2019-03-09', hitCnt: 44, body: '내용없음'});

        this.postList.push({no: 11, title: 'Hello World11', writer:'홍길동', regDate: '2019-03-09', hitCnt: 12, body: '내용없음'});
        this.postList.push({no: 12, title: 'Hello World12', writer:'김만득',  regDate: '2019-03-09', hitCnt: 18, body: '내용없음'});
        this.postList.push({no: 13, title: 'Hello World13', writer:'잠만보',  regDate: '2019-03-09', hitCnt: 32, body: '내용없음'});
        this.postList.push({no: 14, title: 'Hello World14', writer:'피카츄',  regDate: '2019-03-09', hitCnt: 192, body: '내용없음'});
        this.postList.push({no: 15, title: 'Hello World15', writer:'영심이',  regDate: '2019-03-09', hitCnt: 44, body: '내용없음'});
        this.postList.push({no: 16, title: 'Hello World16', writer:'홍길동', regDate: '2019-03-09', hitCnt: 12, body: '내용없음'});
        this.postList.push({no: 17, title: 'Hello World17', writer:'김만득',  regDate: '2019-03-09', hitCnt: 18, body: '내용없음'});
        this.postList.push({no: 18, title: 'Hello World18', writer:'잠만보',  regDate: '2019-03-09', hitCnt: 32, body: '내용없음'});
        this.postList.push({no: 19, title: '테스트 중이예요 - 19', writer:'피카츄3',  regDate: '2019-03-09', hitCnt: 192, body: '내용없음'});
        this.postList.push({no: 20, title: '테스트 중입니다 - 20', writer:'영심이2',  regDate: '2019-03-09', hitCnt: 44, body: '내용없음'});
    }

    getPostList(vue, page, keyword) {

        let posts = [];
        let filteredPosts = [];

        if (typeof keyword == 'undefined' || keyword == '') {
            let start = (page - 1) * this.itemsPerPage;
            let end = Math.min(start + this.itemsPerPage, this.postList.length);

            for (let i = start; i < end; i++) {
                posts.push(this.postList[i]);
            }

            return {
                posts: posts,
                curPage: page,
                postCount: this.postList.length
            }
        }
        else
        {
            for (let i = 0; i < this.postList.length; i++)
            {
                if (this.postList[i].title.indexOf(keyword) >= 0 || this.postList[i].body.indexOf(keyword) >= 0)
                    filteredPosts.push(this.postList[i]);
            }

            let start = (page - 1) * this.itemsPerPage;
            let end = Math.min(start + this.itemsPerPage, filteredPosts.length);

            for (let i = start; i < end; i++) {
                posts.push(filteredPosts[i]);
            }

            return {
                posts: posts,
                curPage: page,
                postCount: filteredPosts.length
            }
        }
    }

    getPost(no) {
        for (let i = 0; i < this.postList.length; i++)
        {
            if (this.postList[i].no === no)
                return this.postList[i];
        }
        return null;
    }

    getNextNo() {
        let no = 0;
        for (let i = 0; i < this.postList.length; i++) {
            if (no < this.postList[i].no)
                no = this.postList[i].no
        }

        return no + 1;
    }

    addPost(post) {
        post.no = this.getNextNo()
        this.postList.push(post)
    }

    updatePost(post) {
        for (let i = 0; i < this.postList.length; i++) {
            if (this.postList[i].no == post.no) {
                this.postList[i].title = post.title;
                this.postList[i].body = post.body;
                break;
            }
        }
    }

    deletePost(no) {
        for (let i = 0; i < this.postList.length; i++) {
            if (this.postList[i].no == no) {
                this.postList.splice(i, 1);
                break;
            }
        }
    }
}

export default new PostApi()