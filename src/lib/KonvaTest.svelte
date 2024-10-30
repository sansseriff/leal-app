<script lang="ts">
  import Konva from "konva";
  // import { Ellipse } from "konva";
  import { onMount, setContext } from "svelte";

  let width = $state(0);
  let height = $state(0);

  let sceneWidth = 1000;
  let sceneHeight = 1000/16*9;


  let container;
  let stage;
  onMount(() => {
    stage = new Konva.Stage({
      container: container,
      width: sceneWidth,
      height: sceneHeight,
    });

    var layer = new Konva.Layer();

    var oval = new Konva.Ellipse({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radiusX: 300,
      radiusY: 300,
      fill: "yellow",
      stroke: "green",
      strokeWidth: 4,
    });

    // add the shape to the layer
    layer.add(oval);

    // add the layer to the stage
    stage.add(layer);

    const resizeObserver = new ResizeObserver(() => {
      width = container.clientWidth;
      height = width/16*9;

      var scale = width / sceneWidth;

      stage.width(width);
      stage.height(height);
      stage.scale({ x: scale, y: scale });
      stage.draw();
    });

    resizeObserver.observe(container);


    console.log(oval.getHeight())
    return () => {
      resizeObserver.disconnect();
    };

  });
</script>

<div
  bind:clientWidth={width}
  bind:clientHeight={height}
  bind:this={container}
  id="container"
></div>

<style>
</style>
