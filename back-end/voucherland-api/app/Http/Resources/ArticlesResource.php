<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticlesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            config('utils.ARTICLE.ID') => $this->id,
            config('utils.ARTICLE.TITLE') => $this->title,
            config('utils.ARTICLE.DESCRIPTION') => $this->description,
            config('utils.ARTICLE.CONTENT') => $this->content,
            config('utils.ARTICLE.SUB_TITLE') => $this->sub_title,
            config('utils.ARTICLE.SUB_CONTENT') => $this->sub_content,
            config('utils.ARTICLE.IMAGE') => $this->article_image,
            config('utils.ARTICLE.READ_TIME') => $this->read_time,
            config('utils.ARTICLE.STATUS') => $this->status,
            'created_at' => $this->created_at,
            'tags' => TagsResource::collection($this->tags)
        ];
    }
}
