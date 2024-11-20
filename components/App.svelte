<script>
import { RouterView } from '@dvcol/svelte-simple-router/components';

import HelloComponent from './hello/HelloComponent.svelte';
import GoodbyeComponent from './goodbye/GoodbyeComponent.svelte';

const RouteName = {
  Hello: 'hello',
  Goodbye: 'goodbye',
  Home: 'home',
  Any: 'any',
} ;

export const routes = [
  {
    name: RouteName.Home,
    path: '/',
    component: HelloComponent
  },
  {
    name: RouteName.Goodbye,
    path: `/goodbye`,
    component: GoodbyeComponent
  },
];

export const options = {
  hash: true,
  routes,
};

</script>

<RouterView {options} />