<!-- eslint-disable max-len -->
<template>
  <div>{{ content }}</div>
</template>

<script setup lang="ts">
import { ref, type PropType } from "vue";
import type { RichEditor } from "../../interface/product";

const content = ref("");

defineProps({
  editorContent: {
    type: Array as PropType<RichEditor[]>,
    required: true,
  },
});

const mock = [
  {
    type: "paragraph",
    children: [
      {
        text: "Forclaz propose « enfin » un sac à dos de trekking léger, en s’inspirant peut être quelque peu du sac à dos osprey levity 45 bien connu dans le monde de la randonnée légère et que ses utilisateurs adorent. Ce tout nouveau sac à dos a des arguments, comme un poids léger de seulement 1,3kg pour une contenance totale de 60 litres (50l + 10l dans la capuche du sac) soit un rapport poids / volume très intéressant. Il mérite que l’on s’y penche de plus près.",
        type: "text",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "",
        type: "text",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Il s’agit bien ici d’un sac léger qui ne fait pas de compromis sur la solidité. Decathlon souhaite clairement faire son entrée dans le Monde de la randonnée légère, une vrai tendance.",
        type: "text",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "",
        type: "text",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Dimensions :",
        type: "text",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "",
        type: "text",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Hauteur: 65cm",
        type: "text",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Largeur: 35cm",
        type: "text",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Profondeur: 30cm",
        type: "text",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "",
        type: "text",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [
      {
        text: "Composition :",
        type: "text",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Compartiment principal 100% Polyamide, Doublure 100% Polyamide, Empiècement 100% Polyamide, Sangle 100% Polypropylène, Couvre sac 100% Polyester, Enduction 100% Polyuréthane.",
        type: "text",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "",
        type: "text",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [
      {
        text: "On a aimé : ",
        type: "text",
      },
    ],
  },
  {
    type: "list",
    format: "unordered",
    children: [
      {
        type: "list-item",
        children: [
          {
            text: "AGSD",
            type: "text",
          },
        ],
      },
      {
        type: "list-item",
        children: [
          {
            text: "AAZA",
            type: "text",
          },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [
      {
        text: "On a moins aimé : ",
        type: "text",
      },
    ],
  },
  {
    type: "list",
    format: "unordered",
    children: [
      {
        type: "list-item",
        children: [
          {
            text: "azaz",
            type: "text",
          },
        ],
      },
      {
        type: "list-item",
        children: [
          {
            text: "azz",
            type: "text",
          },
        ],
      },
      {
        type: "list-item",
        children: [
          {
            text: "Azaz",
            type: "text",
          },
        ],
      },
    ],
  },
];
</script>
