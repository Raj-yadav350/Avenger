/** @format */

// Dependencies
const Event = require('../../structures/Event')

/**
 * Shard error event
 * @event Avenger#ShardError
 * @extends {Event}
 */
class ShardError extends Event {
	constructor(...args) {
		super(...args, {
			dirname: __dirname,
		})
	}

	/**
	 * Function for receiving event.
	 * @param {bot} bot The instantiating client
	 * @param {Error} error The error encountered
	 * @param {number} shardID The shard id that disconnected
	 * @readonly
	 */
	async run(bot, error, shardID) {
		console.log(error)
		bot.logger.error(`Shard: ${shardID} encounted error: ${error}`)
	}
}

module.exports = ShardError
