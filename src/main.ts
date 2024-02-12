import { world } from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe((event) => {
	event.player.sendMessage("§e§lYou are spawned!!");
});
