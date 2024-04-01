import $ from 'jquery';
import store from './store';
import addRecipe from './actions/addRecipe';

const handleAdd = () => {
  const $recipeName = $('.recipes > input');

  store.dispatch(addRecipe($recipeName.val()));

  $recipeName.val('');
};

const updateUI = () => {
  const { recipes } = store.getState();

  $('.recipes > ul').html(recipes.map((recipe) => `<li>${recipe.name}</li>`));
};

const renderUI = () => {
  $('#app').append(`
    <div class="recipes">
      <h2>Recipes:</h2>
      <ul></ul>
      <input type="text" />
      <button>Add</button>
    </div>
  `);

  $(document).on('click', '.recipes > button', handleAdd);

  store.subscribe(updateUI);

  updateUI();
};

export default renderUI;
