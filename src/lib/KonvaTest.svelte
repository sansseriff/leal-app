<script lang="ts">
  // import { Konva } from 'konva_web/lib/Core';
  // // import { Ellipse, type EllipseConfig } from 'konva_web/lib/shapes/Ellipse';
  // import Stage from 'konva_web';
  // import Layer from 'konva_web';
  // import Ellipse from 'konva_web';
  // import { onMount } from 'svelte';

  import Konva from "konva_web";
  // import type { Stage } from 'konva_web/lib/core';
  import { onMount, setContext } from "svelte";

  let width = 0;
  let height = 0;
  // console.log("0")

  // var stage = new Konva.Stage({
  //   // container: "container",
  //   width: width,
  //   height: height,
  // });

  // console.log("one")

  // var layer = new Layer.Layer();

  //     var oval = new Ellipse.Ellipse({
  //       x: stage.width() / 2,
  //       y: stage.height() / 2,
  //       radiusX: 100,
  //       radiusY: 50,
  //       fill: 'yellow',
  //       stroke: 'black',
  //       strokeWidth: 4,
  //     });

  //     // add the shape to the layer
  //     layer.add(oval);

  //     // add the layer to the stage
  //     stage.add(layer);

  // console.log("2")

  setContext("konva", {
    getStage: () => stage,
  });

  let container;
  let stage;
  onMount(() => {
    stage = new Konva.Stage({
      container: container,
      width: 600,
      height: 400,
    });

    var layer = new Konva.Layer();

    var oval = new Konva.Ellipse({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radiusX: 100,
      radiusY: 50,
      fill: "yellow",
      stroke: "black",
      strokeWidth: 4,
    });

    // add the shape to the layer
    layer.add(oval);

    // add the layer to the stage
    stage.add(layer);
  });
</script>

<div
  bind:clientWidth={width}
  bind:clientHeight={height}
  bind:this={container}
  id="container"
></div>

<style>
  #container {
    width: 100%;
    height: 200px;
  }
</style>
