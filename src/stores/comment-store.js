import { defineStore } from 'pinia';

const useCommentStore = defineStore( 'comments', {
 state: () => ( { 
    comments: [],
 } ),
 actions: {
    addComment( comment ) {
        this.comments.push( comment );
    }
 }
} );

export default useCommentStore;