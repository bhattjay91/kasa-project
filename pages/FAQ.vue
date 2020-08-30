<template>
<section class="section sectionFaq">
    <div class="container">
      <BreadCrumb :breadCrumbObject="breadCrumbObject" />
      <div class="row">
        <div class="faqRow col-12 col-lg-6" :key="key" v-for="(eachFAQ, key) in faqData">
          <article class="faq" >
            <header class="faq-header" data-toggle="collapse" :data-target="'#faq-item-'+key" aria-expanded="true">
              <h1 class="faq-title">{{eachFAQ.que}}</h1>
            </header>
            <div class="faq-body collapse" :id="'faq-item-'+key">
              <p>{{eachFAQ.ans}}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
</section>
</template>

<script>
import BreadCrumb from '~/components/BreadCrumb.vue';
export default {
  name: 'FAQ',
  components: {
    BreadCrumb,
  },
  head(){
    return {
      title: 'FAQ',
      meta:[
        {
          hid: 'faq',
          name: 'faq',
          content: 'Frequently Asked Questions'
        }
      ]
    }
  },
  data(){
    return {
      breadCrumbObject:{
        mainTitle: 'Frequently Asked Questions',
        subTitle: 'FAQ'
      },
      faqData:[
        {
          que: "Where can I get the latest info for my booking?",
          ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          que: "How do I change or cancel my booking in this situation?",
          ans: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          que: "How do I change or cancel my booking in this situation?",
          ans: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          que: "How do I get more info about the room or property's facilities?",
          ans: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
        {
          que: "I can't find my confirmation email. What should I do?",
          ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          que: "I'll be arriving outside check-in hours. Can I still check in?",
          ans: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.t",
        },
        {
          que: "How can I get an invoice?",
          ans: "T vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        },
        {
          que: "Why was I charged?",
          ans: " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        }
      ]
    }
  }
}

</script>
<style scoped>
  .sectionFaq{
      padding-top: 1.375rem;
      padding-bottom: 1.375rem;
  }
  .faq {
    padding: 1.375rem 0;
    border-bottom: .0625rem solid #dee2e6;
  }
  .faq-title:hover{
    color:#302a8d;
  }
  .faq-title{
    color: #000;
    font-weight: 400;
    font-size: 1.15rem;
    margin: 0 1.25rem 0 0;
  }
  .faq-header .faq-toggle {
    line-height: 1;
  }
  .faq-open, .faq-toggle {
    color: #302a8d;
  }
  .faq-header{
    cursor: pointer;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .faq-body{
    padding-top:10px;
  }
</style>
