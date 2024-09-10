import { buildWc } from './ex-base.js';

import Alert from '../components/alert/Example.vue';
import Attention from '../components/attention/Example.vue';
import AttentionFlip from '../components/attention/FlipExample.vue';
import AttentionStatic from '../components/attention/StaticExample.vue';
import AttentionFallbackPlacements from '../components/attention/FallbackPlacementsExample.vue';
import Badge from '../components/badge/Example.vue';
import Box from '../components/box/Example.vue';
import Breadcrumbs from '../components/breadcrumbs/Example.vue';
import Button from '../components/buttons/Example.vue';
import ButtonGroup from '../components/buttongroup/Example.vue';
import Card from '../components/card/Example.vue';
import Checkbox from '../components/checkbox/Example.vue';
import Expandable from '../components/expandable/Example.vue';
import Icon from '../components/icons/Example.vue';
import Modal from '../components/modal/Example.vue';
import Pagination from '../components/pagination/Example.vue';
import Pill from '../components/pill/Example.vue';
import Radio from '../components/radio/Example.vue';
import RadioButtons from '../components/radiobuttons/Example.vue';
import Select from '../components/select/Example.vue';
import Slider from '../components/slider/Example.vue';
import Spinner from '../components/spinner/Example.vue';
import Steps from '../components/steps/Example.vue';
import Switch from '../components/switch/Example.vue';
import Tabs from '../components/tabs/Example.vue';
import TextArea from '../components/textarea/Example.vue';
import TextField from '../components/textfield/Example.vue';
import Toast from '../components/toast/Example.vue';
import Utilities from '../components/utilities/Example.vue';
import Text from '../components/text/Example.vue';

import QrColorTable from "./qr-color-table.vue";

buildWc('alert-example', Alert);
buildWc('attention-example', Attention);
buildWc('attention-flip-example', AttentionFlip);
buildWc('attention-static-example', AttentionStatic);
buildWc('attention-fallback-placements-example', AttentionFallbackPlacements);
buildWc('badge-example', Badge);
buildWc('box-example', Box);
buildWc('breadcrumbs-example', Breadcrumbs);
buildWc('button-example', Button);
buildWc('buttongroup-example', ButtonGroup);
buildWc('card-example', Card);
buildWc('checkbox-example', Checkbox);
buildWc('expandable-example', Expandable);
buildWc('icon-example', Icon);
buildWc('modal-example', Modal);
buildWc('pagination-example', Pagination);
buildWc('pill-example', Pill);
buildWc('radio-example', Radio);
buildWc('radiobuttons-example', RadioButtons);
buildWc('select-example', Select);
buildWc('slider-example', Slider);
buildWc('spinner-example', Spinner);
buildWc('steps-example', Steps);
buildWc('switch-example', Switch);
buildWc('tabs-example', Tabs);
buildWc('textarea-example', TextArea);
buildWc('textfield-example', TextField);
buildWc('toast-example', Toast);
buildWc('utilities-example', Utilities);
buildWc('text-example', Text);

buildWc('example-container');

buildWc('background-color-table', QrColorTable, { dataId: 'backgroundColor' });
buildWc('border-color-table', QrColorTable, { dataId: 'borderColor' });
buildWc('divide-color-table', QrColorTable, { dataId: 'divideColor' });
buildWc('outline-color-table', QrColorTable, { dataId: 'outlineColor' });
buildWc('icon-color-table', QrColorTable, { dataId: 'iconColor' });
buildWc('text-color-table', QrColorTable, { dataId: 'textColor' });